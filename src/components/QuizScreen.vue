<script setup lang="ts">
import type { Question, Outcome, RoundMeta } from '../types'

const LETTERS = ['A', 'B', 'C', 'D'] as const

defineProps<{
  idx: number
  total: number
  progress: number
  rounds: Record<number, RoundMeta>
  currentQ: Question
  selected: number | null
  isAnswered: boolean
  outcome: Outcome | undefined
  isLastQ: boolean
  nextLabel: string
  optClass: (i: number) => Record<string, boolean>
}>()

const emit = defineEmits<{
  pick: [i: number]
  submitAnswer: []
  nextQuestion: []
  goHome: []
}>()
</script>

<template>
  <div class="screen">
    <!-- Progress bar -->
    <div class="prog-wrap">
      <div class="prog-meta">
        <span>Question {{ idx + 1 }} of {{ total }}</span>
        <span>{{ progress }}%</span>
      </div>
      <div class="prog-bar">
        <div class="prog-fill" :style="{ width: progress + '%' }" />
      </div>
    </div>

    <!-- Round badge -->
    <div class="round-badge">
      <div class="round-dot" :style="{ background: rounds[currentQ.round].color }">
        {{ currentQ.round }}
      </div>
      <span>Round {{ currentQ.round }} — {{ rounds[currentQ.round].name }}</span>
    </div>

    <!-- Question card — :key re-mounts on index change, triggering CSS animation -->
    <div :key="idx" class="q-card">
      <div class="q-meta">
        <span class="cat-tag">{{ currentQ.category }}</span>
        <span class="q-num">Question {{ idx + 1 }}</span>
      </div>
      <div class="q-text">{{ currentQ.question }}</div>

      <div class="options">
        <div
          v-for="(opt, i) in currentQ.options"
          :key="i"
          :class="optClass(i)"
          @click="emit('pick', i)"
        >
          <div class="opt-letter">{{ LETTERS[i] }}</div>
          <div class="opt-text">{{ opt }}</div>
        </div>
      </div>

      <button
        v-if="!isAnswered"
        class="btn-submit"
        :disabled="selected === null"
        @click="emit('submitAnswer')"
      >
        Submit Answer
      </button>

      <div v-if="outcome === 'incorrect'" class="wrong-note">
        ❌ Not quite — the correct answer is highlighted above.<br />
        The full explanation only unlocks when you answer correctly.
      </div>
    </div>

    <!-- Explanation (correct only) -->
    <Transition name="fade-up">
      <div v-if="outcome === 'correct'" class="explanation">
        <div class="exp-header">✅ Correct! Here's the concept:</div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="exp-body" v-html="currentQ.explanation" />
      </div>
    </Transition>

    <!-- Navigation -->
    <div class="nav-row">
      <button class="btn-ghost" @click="emit('goHome')">⌂ Home</button>
      <button class="btn-next" :disabled="!isAnswered" @click="emit('nextQuestion')">
        {{ nextLabel }}
      </button>
    </div>
  </div>
</template>
