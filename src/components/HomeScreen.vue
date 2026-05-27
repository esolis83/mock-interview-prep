<script setup lang="ts">
import type { RoundCard, RoundMeta } from '../types'

const props = defineProps<{
  rounds: Record<number, RoundMeta>
  roundCards: RoundCard[]
  selectedRound: number | null
  attempts: number
  bestScore: number
  totalQuestions: number
}>()

const emit = defineEmits<{
  selectRound: [round: number]
  startQuiz: [roundFilter: number | null]
}>()
</script>

<template>
  <div class="screen">
    <div class="home-hero">
      <div class="tag">Interview Preparation Exercise</div>
      <h2>Senior Frontend Engineer<br /><span>Mock Interview</span></h2>
      <p>
        {{ totalQuestions }} carefully crafted questions across 4 interview rounds. Answer correctly
        to unlock the full concept explanation. One shot per question — just like the real thing.
      </p>
    </div>

    <div class="round-cards">
      <div
        v-for="card in roundCards"
        :key="card.round"
        class="round-card"
        :class="{ selected: card.selected }"
        @click="emit('selectRound', card.round)"
      >
        <div class="round-q-count">{{ card.count }} questions</div>
        <div class="round-card-header">
          <div class="round-num-badge" :style="{ background: rounds[card.round].color }">
            {{ card.round }}
          </div>
          <h3>Round {{ card.round }} — {{ rounds[card.round].name }}</h3>
        </div>
        <p>{{ rounds[card.round].desc }}</p>
      </div>
    </div>

    <button class="all-rounds-btn" @click="emit('startQuiz', null)">
      🚀 Start Full Interview (All Rounds)
    </button>
    <button v-if="selectedRound" class="start-btn" @click="emit('startQuiz', selectedRound)">
      Start Round {{ selectedRound }} Only →
    </button>

    <div v-if="attempts > 0" class="stats-row">
      <div class="stat-card">
        <div class="stat-val">{{ bestScore }}%</div>
        <div class="stat-lbl">Best Score</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">{{ attempts }}</div>
        <div class="stat-lbl">Attempts</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">{{ totalQuestions }}</div>
        <div class="stat-lbl">Total Questions</div>
      </div>
    </div>
  </div>
</template>
