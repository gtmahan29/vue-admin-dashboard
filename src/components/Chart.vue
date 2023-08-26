<template>
  <apexchart height="70" type="area" :options="options" :series="series"></apexchart>
</template>

<script setup>
    import { ref } from 'vue'

    const options = {
        chart: {
            id: 'sparkline1',
            type: 'area',
            height: 140,
            sparkline: {
            enabled: true
            },
            group: 'sparklines',
            
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        stroke: {
            curve: 'smooth',
            width: 4,
        },
        markers: {
            size: 0
        },
        tooltip: {
            fixed: {
                enabled: true,
                position: 'right'
            },
            x: {
                show: false
            }
        },
        colors: ['#d035b7'],
        fill: {
          type: 'gradient',
          colors: ['#d035b7']
        }
    };

        const series = ref([
        {
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]);
</script>

<style lang="scss">

</style>






















<!-- <template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
    import { use } from 'echarts/core';
    import { CanvasRenderer } from 'echarts/renderers';
    import { BarChart } from 'echarts/charts';
    import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    } from 'echarts/components';
    import VChart, { THEME_KEY } from 'vue-echarts';
    import { ref, provide } from 'vue';

    use([
        CanvasRenderer,
        BarChart,
        TitleComponent,
        TooltipComponent,
        LegendComponent,
    ]);

    // provide(THEME_KEY, 'light');

    const option = ref({
        title: {
            text: 'Traffic Sources',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
        },
        series: [
            {
            name: 'Traffic Sources',
            type: 'bar',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: 'Direct' },
                { value: 310, name: 'Email' },
                { value: 234, name: 'Ad Networks' },
                { value: 135, name: 'Video Ads' },
                { value: 1548, name: 'Search Engines' },
            ],
            emphasis: {
                itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
            },
        ],
    });

</script>

<style lang="scss">

</style> -->