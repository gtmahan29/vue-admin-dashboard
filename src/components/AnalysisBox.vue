<template>
    <RouterLink class="analysis-box" :to="path">
        <div class="section-header">
            <h2>
                {{ title }}
            </h2>
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
        </div>
        <div class="analysis">
            <div class="stats">
                <div class="total">{{ stats.value }}</div>
                <div class="compare" :class="[statsClass(stats.comparison)]">
                    <!-- icon -->
                    {{ stats.comparison }}%
                    <span>در مقایسه با سال قبل</span>
                </div>
            </div>
            <div class="analysis-chart">
                <Chart />
            </div>
        </div>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { defineProps, computed } from 'vue'
import Chart from './Chart.vue';

const props = defineProps({
    path: {
        type: String,
        required: true
    },
    title: {
        required: true,
    },
    stats: {
        required: true,
    },
    chart: {
        required: true,
    },
})

// برای اضافه کردن کلس سبز یا قرمز
const statsClass = computed(() => {
    return (value) => {
        return value >= 0 ? 'green' : 'red'
    }
})

</script>

<style lang="scss">
.analysis-box {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 1.5rem;

    .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        h2 {
            font-size: 1.6rem;
            font-weight: bold;
        }

        svg {
            font-size: 1.3rem;
        }
    }

    .analysis {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .stats {
            display: flex;
            flex-direction: column;
            margin-top: auto;

            .total {
                font-size: 2.5rem;
                font-weight: 900;
            }

            .compare {
                font-size: 1.3rem;
                font-weight: bold;

                span {
                    font-size: 1rem;
                    color: #888;
                    margin-right: .5rem;
                    font-weight: normal;
                }
            }
        }
    }
}

.green {
    color: green;
}

.red {
    color: red;
}
</style>