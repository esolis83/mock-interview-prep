<script setup lang="ts">
import type { RoundRow } from '../types'

defineProps<{
  resultsMeta: { icon: string; msg: string }
  correctCount: number
  total: number
  resultsPct: number
  roundBreakdown: RoundRow[]
}>()

const emit = defineEmits<{
  goHome: []
  retryQuiz: []
}>()
</script>

<template>
  <div class="screen results-screen">
    <div class="res-icon">{{ resultsMeta.icon }}</div>
    <div class="res-title">Round Complete!</div>
    <div class="res-score">{{ correctCount }} / {{ total }}</div>
    <div class="res-pct">{{ resultsPct }}% correct</div>
    <div class="res-msg">{{ resultsMeta.msg }}</div>

    <div class="res-badges">
      <div class="res-badge">
        <span class="rb-val" style="color: var(--success)">{{ correctCount }}</span>
        <div class="rb-lbl">Correct</div>
      </div>
      <div class="res-badge">
        <span class="rb-val" style="color: var(--error)">{{ total - correctCount }}</span>
        <div class="rb-lbl">Incorrect</div>
      </div>
      <div class="res-badge">
        <span class="rb-val" style="color: var(--primary-lt)">{{ resultsPct }}%</span>
        <div class="rb-lbl">Score</div>
      </div>
    </div>

    <div class="res-round-breakdown">
      <h4>Breakdown by Round</h4>
      <div v-for="row in roundBreakdown" :key="row.round" class="rnd-row">
        <span :style="{ color: row.color, fontWeight: '700' }">R{{ row.round }}</span>
        <span class="rnd-lbl">Round {{ row.round }}</span>
        <span class="rnd-score">{{ row.correct }}/{{ row.total }}</span>
        <div class="rnd-bar-wrap">
          <div class="rnd-bar-fill" :style="{ width: row.pct + '%', background: row.color }" />
        </div>
      </div>
    </div>

    <div class="res-actions">
      <button class="btn-ghost" @click="emit('goHome')">⌂ Home</button>
      <button class="btn-next" @click="emit('retryQuiz')">↺ Retry Same Round</button>
    </div>
  </div>
</template>
