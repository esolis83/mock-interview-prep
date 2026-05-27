<script setup lang="ts">
import { ref, computed } from 'vue';
import { QUESTIONS } from './questions';
import type {
  Question,
  Screen,
  Outcome,
  RoundCard,
  RoundRow,
  RoundMeta,
} from './types';
import HomeScreen from './components/HomeScreen.vue';
import QuizScreen from './components/QuizScreen.vue';
import ResultsScreen from './components/ResultsScreen.vue';

// ─── Constants ────────────────────────────────────────────────────────────────
const ROUNDS: Record<number, RoundMeta> = {
  1: {
    color: '#7c6df0',
    name: 'Advanced React & JavaScript',
    desc: 'React internals, hooks, JS fundamentals, async behavior, and scenario-based concepts.',
  },
  2: {
    color: '#06b6d4',
    name: 'Coding Round',
    desc: 'Custom hooks, patterns, TypeScript, state management, and performance optimizations.',
  },
  3: {
    color: '#f59e0b',
    name: 'Frontend Architecture',
    desc: 'CSS, architecture, accessibility, state libraries, build tools, and Web Vitals.',
  },
  4: {
    color: '#10b981',
    name: 'Behavioral / HR Round',
    desc: 'Leadership, ownership, collaboration, communication, and engineering decisions.',
  },
};

// ─── State ────────────────────────────────────────────────────────────────────
const screen = ref<Screen>('home');
const activeQuestions = ref<Question[]>([]);
const idx = ref(0);
const selected = ref<number | null>(null);
const correctCount = ref(0);
const answeredCount = ref(0);
const sessionResults = ref<Record<number, Outcome>>({});
const sessionSelections = ref<Record<number, number>>({});
const correctRevealed = ref<Record<number, boolean>>({});
const currentRoundFilter = ref<number | null>(null);
const selectedRound = ref<number | null>(null);
const attempts = ref(parseInt(localStorage.getItem('mip_attempts') ?? '0'));
const bestScore = ref(parseFloat(localStorage.getItem('mip_best') ?? '0'));

// ─── Computed ─────────────────────────────────────────────────────────────────
const currentQ = computed<Question | undefined>(
  () => activeQuestions.value[idx.value],
);

const outcome = computed<Outcome | undefined>(() =>
  currentQ.value ? sessionResults.value[currentQ.value.id] : undefined,
);

const isAnswered = computed(() => outcome.value !== undefined);

const progress = computed(() =>
  Math.round((idx.value / activeQuestions.value.length) * 100),
);

const isLastQ = computed(() => idx.value === activeQuestions.value.length - 1);

const nextLabel = computed(() =>
  isLastQ.value ? 'See Results →' : 'Next Question →',
);

const roundCards = computed<RoundCard[]>(() =>
  [1, 2, 3, 4].map((r) => ({
    round: r,
    count: QUESTIONS.filter((q) => q.round === r).length,
    selected: selectedRound.value === r,
  })),
);

const resultsPct = computed(() =>
  activeQuestions.value.length
    ? Math.round((correctCount.value / activeQuestions.value.length) * 100)
    : 0,
);

const resultsMeta = computed(() => {
  const p = resultsPct.value;
  if (p === 100)
    return {
      icon: '🏆',
      msg: 'Perfect score! Walk into that interview with full confidence.',
    };
  if (p >= 80)
    return {
      icon: '🎉',
      msg: "Excellent work. Strong understanding of senior concepts — review your misses and you're ready.",
    };
  if (p >= 60)
    return {
      icon: '💪',
      msg: 'Good foundation! A few gaps to close. Re-read the explanations for questions you missed.',
    };
  if (p >= 40)
    return {
      icon: '📚',
      msg: 'Keep studying. These are challenging senior-level concepts — read each explanation carefully.',
    };
  return {
    icon: '🔁',
    msg: 'Start with the explanations for every question, then retry. Repetition is the key.',
  };
});

const roundBreakdown = computed<RoundRow[]>(() => {
  const rounds = [...new Set(activeQuestions.value.map((q) => q.round))].sort();
  return rounds.map((r) => {
    const rQs = activeQuestions.value.filter((q) => q.round === r);
    const rRight = rQs.filter(
      (q) => sessionResults.value[q.id] === 'correct',
    ).length;
    return {
      round: r,
      correct: rRight,
      total: rQs.length,
      pct: Math.round((rRight / rQs.length) * 100),
      color: ROUNDS[r].color,
    };
  });
});

// ─── Option styling ───────────────────────────────────────────────────────────
function optClass(i: number): Record<string, boolean> {
  const q = currentQ.value;
  const out = outcome.value;
  if (!q || !out) {
    return { opt: true, selected: selected.value === i };
  }
  const sel = sessionSelections.value[q.id];
  return {
    opt: true,
    disabled: true,
    correct:
      i === q.correct && (out === 'correct' || !!correctRevealed.value[q.id]),
    incorrect: out === 'incorrect' && sel === i,
  };
}

// ─── Actions ──────────────────────────────────────────────────────────────────
function pick(i: number): void {
  if (!isAnswered.value) selected.value = i;
}

function submitAnswer(): void {
  const q = currentQ.value;
  if (selected.value === null || !q || isAnswered.value) return;

  const isRight = selected.value === q.correct;
  sessionResults.value = {
    ...sessionResults.value,
    [q.id]: isRight ? 'correct' : 'incorrect',
  };
  sessionSelections.value = {
    ...sessionSelections.value,
    [q.id]: selected.value,
  };

  if (isRight) {
    correctCount.value++;
    correctRevealed.value = { ...correctRevealed.value, [q.id]: true };
  } else {
    setTimeout(() => {
      correctRevealed.value = { ...correctRevealed.value, [q.id]: true };
    }, 480);
  }
  answeredCount.value++;
}

function nextQuestion(): void {
  if (!isLastQ.value) {
    idx.value++;
    selected.value = null;
  } else {
    finishQuiz();
  }
}

function finishQuiz(): void {
  const pct = resultsPct.value;
  attempts.value++;
  localStorage.setItem('mip_attempts', String(attempts.value));
  if (pct > bestScore.value) {
    bestScore.value = pct;
    localStorage.setItem('mip_best', String(pct));
  }
  screen.value = 'results';
}

function startQuiz(roundFilter: number | null): void {
  currentRoundFilter.value = roundFilter;
  activeQuestions.value = roundFilter
    ? QUESTIONS.filter((q) => q.round === roundFilter)
    : [...QUESTIONS];
  idx.value = 0;
  selected.value = null;
  correctCount.value = 0;
  answeredCount.value = 0;
  sessionResults.value = {};
  sessionSelections.value = {};
  correctRevealed.value = {};
  screen.value = 'quiz';
}

function retryQuiz(): void {
  startQuiz(currentRoundFilter.value);
}
function selectRound(r: number): void {
  selectedRound.value = selectedRound.value === r ? null : r;
}
function goHome(): void {
  screen.value = 'home';
  selectedRound.value = null;
}
</script>

<!-- ─────────────────────────────────────────────────────────────────────────── -->

<template>
  <header>
    <div class="brand">
      <h1>🎯 <span>Mock</span> Interview Prep</h1>
      <p>Senior Frontend Engineer · React · TypeScript · JavaScript · CSS</p>
    </div>
    <div class="header-right">
      <button v-if="screen !== 'home'" class="btn-home" @click="goHome">
        ⌂ Home
      </button>
      <div class="score-box">
        <div class="score-label">Score</div>
        <div class="score-num">{{ correctCount }}</div>
        <div class="score-denom">of {{ answeredCount }}</div>
      </div>
    </div>
  </header>

  <main>
    <HomeScreen
      v-if="screen === 'home'"
      :rounds="ROUNDS"
      :round-cards="roundCards"
      :selected-round="selectedRound"
      :attempts="attempts"
      :best-score="bestScore"
      :total-questions="QUESTIONS.length"
      @select-round="selectRound"
      @start-quiz="startQuiz"
    />

    <QuizScreen
      v-else-if="screen === 'quiz' && currentQ"
      :idx="idx"
      :total="activeQuestions.length"
      :progress="progress"
      :rounds="ROUNDS"
      :current-q="currentQ"
      :selected="selected"
      :is-answered="isAnswered"
      :outcome="outcome"
      :is-last-q="isLastQ"
      :next-label="nextLabel"
      :opt-class="optClass"
      @pick="pick"
      @submit-answer="submitAnswer"
      @next-question="nextQuestion"
      @go-home="goHome"
    />

    <ResultsScreen
      v-else-if="screen === 'results'"
      :results-meta="resultsMeta"
      :correct-count="correctCount"
      :total="activeQuestions.length"
      :results-pct="resultsPct"
      :round-breakdown="roundBreakdown"
      @go-home="goHome"
      @retry-quiz="retryQuiz"
    />
  </main>
</template>
