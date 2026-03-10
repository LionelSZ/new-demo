<template>
  <div class="home-container">
    <div id="map" class="map-container"></div>
    <div class="header-warp">绿能资产星图矩阵</div>

    <!-- 左侧面板 -->
    <div class="left-panels">
      <div class="panel-item glass-card">
        <div class="panel-header">电站概览</div>
        <div class="panel-content grid-2">
          <div class="data-item" v-for="item in powerStationOverview" :key="item.label">
            <span class="label">{{ item.label }}</span>
            <span class="value">{{ item.value }}<small>{{ item.unit }}</small></span>
          </div>
        </div>
      </div>
      <div class="panel-item glass-card mt-20">
        <div class="panel-header">储能概览</div>
        <div class="panel-content grid-2">
          <div class="data-item" v-for="item in energyStorageOverview" :key="item.label">
            <span class="label">{{ item.label }}</span>
            <span class="value">{{ item.value }}<small>{{ item.unit }}</small></span>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧面板 -->
    <div class="right-panels">
      <div class="panel-item glass-card h-300">
        <div class="panel-header">电站排名</div>
        <div class="panel-content scroll-y">
          <div class="list-item" v-for="(item, index) in rankings" :key="index">
            <span class="rank-idx" :class="{ 'top3': index < 3 }">{{ index + 1 }}</span>
            <span class="rank-name">{{ item.name }}</span>
            <span class="rank-val">{{ item.value }} MW</span>
          </div>
        </div>
      </div>
      <div class="panel-item glass-card mt-20 flex-1">
        <div class="panel-header">资本运作</div>
        <div class="panel-content">
          <div class="news-item" v-for="(item, index) in capitalOperations" :key="index">
            <div class="dot"></div>
            <div class="news-text">{{ item }}</div>
          </div>
        </div>
      </div>
      <div class="panel-item glass-card mt-20 flex-1">
        <div class="panel-header">行业资讯</div>
        <div class="panel-content">
          <div class="news-item" v-for="(item, index) in industryNews" :key="index">
            <div class="dot"></div>
            <div class="news-text">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapboxConfig } from '@/config/mapbox';

// 模拟数据
const powerStationOverview = ref([
  { label: '电站数量', value: '1,280', unit: '座' },
  { label: '日发电量', value: '7,560', unit: 'MWh' },
  { label: '年发电量', value: '2.5', unit: '亿kWh' },
  { label: '减少碳排', value: '18.4', unit: '万吨' },
  { label: '电站总容量', value: '5.2', unit: 'GW' },
  { label: '月发电量', value: '2,150', unit: 'MWh' },
  { label: '资产价值总额', value: '128.5', unit: '亿元' },
  { label: '节约标准煤', value: '9.2', unit: '万吨' }
]);

const energyStorageOverview = ref([
  { label: '数量', value: '450', unit: '个' },
  { label: '日发电量', value: '1,240', unit: 'MWh' },
  { label: '年发电量', value: '0.45', unit: '亿kWh' },
  { label: '总容量', value: '2.8', unit: 'GWh' },
  { label: '月发电量', value: '380', unit: 'MWh' },
  { label: '资产价值总额', value: '45.2', unit: '亿元' },
  { label: '减少碳排', value: '3.1', unit: '万吨' },
  { label: '节约标准煤', value: '1.5', unit: '万吨' }
]);

const rankings = ref([
  { name: '华东1号集中式光伏中心', value: '320' },
  { name: '西北荒漠风电基地', value: '280' },
  { name: '华南分布式屋顶集群', value: '245' },
  { name: '华中储能电站B区', value: '210' },
  { name: '西南水电外送枢纽', value: '190' },
]);

const capitalOperations = ref([
  '2026 Q1 绿能资产ABS发行成功，规模15亿',
  '新一轮分布式光伏并购基金完成备案',
  '碳信用额度市场挂牌交易额突破1000万',
  '海外绿氢项目融资协议正式签订'
]);

const industryNews = ref([
  '国家能源局：1-2月光伏新增装机稳步增长',
  '新型储能技术规范（2026版）正式印发',
  '国际绿能大会在沪开幕，聚焦氢能发展',
  '多地出台虚拟电厂补贴政策提升电网响应'
]);

onMounted(() => {
  // Mapbox 初始化 (使用占位 Token)
  // mapboxgl.accessToken = 'pk.eyJ1IjoiYWRtaW4iLCJhIjoiY2p4eGxiNHlxMG5icDN5cXJ4d3ByNXljdCJ9.placeholder';
  mapboxgl.accessToken = MapboxConfig.MAPBOX_TOKEN;

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11', // 暗色地图风格
    center: [108.9, 34.2], // 中心定位中国
    zoom: 3.5,
  });

  map.on('load', () => {
    // 模拟撒点数据
    const points = {
      type: 'FeatureCollection',
      features: [
        { type: 'Feature', geometry: { type: 'Point', coordinates: [116.4, 39.9] }, properties: { type: 'power', name: '北京站' } },
        { type: 'Feature', geometry: { type: 'Point', coordinates: [121.4, 31.2] }, properties: { type: 'storage', name: '上海库' } },
        { type: 'Feature', geometry: { type: 'Point', coordinates: [113.2, 23.1] }, properties: { type: 'power', name: '广州站' } },
        { type: 'Feature', geometry: { type: 'Point', coordinates: [104.0, 30.6] }, properties: { type: 'storage', name: '成都库' } },
        { type: 'Feature', geometry: { type: 'Point', coordinates: [87.6, 43.8] }, properties: { type: 'power', name: '乌鲁木齐站' } }
      ]
    };

    map.addSource('points', { type: 'geojson', data: points });

    // 电站图层 (圆形简化展示)
    map.addLayer({
      id: 'power-layer',
      type: 'circle',
      source: 'points',
      filter: ['==', 'type', 'power'],
      paint: {
        'circle-radius': 8,
        'circle-color': '#00ffcc',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#fff'
      }
    });

    // 储能图层
    map.addLayer({
      id: 'storage-layer',
      type: 'circle',
      source: 'points',
      filter: ['==', 'type', 'storage'],
      paint: {
        'circle-radius': 8,
        'circle-color': '#ffcc00',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#fff'
      }
    });

    // 鼠标悬浮交互
    const popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false });

    map.on('mouseenter', ['power-layer', 'storage-layer'], (e) => {
      map.getCanvas().style.cursor = 'pointer';
      const coordinates = e.features[0].geometry.coordinates.slice();
      const name = e.features[0].properties.name;
      const type = e.features[0].properties.type === 'power' ? '电站' : '储能';

      popup.setLngLat(coordinates).setHTML(`<div style="color:#000;padding:5px;"><b>${name}</b><br/>类型: ${type}</div>`).addTo(map);
    });

    map.on('mouseleave', ['power-layer', 'storage-layer'], () => {
      map.getCanvas().style.cursor = '';
      popup.remove();
    });
  });
});
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #030816;
  overflow: hidden;

  .map-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .header-warp {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: url('@/assets/images/title_bg.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    font-size: 28px;
    letter-spacing: 4px;
    font-weight: 700;
    color: #e6f7ff;
    text-shadow: 0 0 10px rgba(0, 242, 255, 0.829);
    text-align: center;
    line-height: 40px;
    z-index: 10;
    pointer-events: none;
  }

  /* 面板容器布局 */
  .left-panels,
  .right-panels {
    position: absolute;
    top: 100px;
    bottom: 20px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    width: 400px;
  }

  .left-panels {
    left: 20px;
  }

  .right-panels {
    right: 20px;
  }

  /* 玻璃拟态卡片 */
  .glass-card {
    background: rgba(11, 64, 101, 0.4);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 195, 255, 0.3);
    box-shadow: inset 0 0 20px rgba(0, 195, 255, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 15px;
    overflow: hidden;

    &:hover {
      background: rgba(11, 64, 101, 0.6);
      border-color: rgba(0, 195, 255, 0.8);
      box-shadow: 0 0 20px rgba(0, 195, 255, 0.3);
      transform: translateY(-2px);
    }
  }

  .panel-header {
    font-size: 18px;
    font-weight: 600;
    color: #00ddff;
    border-left: 4px solid #00ddff;
    padding-left: 10px;
    margin-bottom: 15px;
    background: linear-gradient(90deg, rgba(0, 221, 255, 0.1) 0%, transparent 100%);
  }

  .panel-content {
    font-size: 14px;

    &.grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px 10px;
    }

    &.scroll-y {
      overflow-y: auto;
    }
  }

  .data-item {
    display: flex;
    flex-direction: column;

    .label {
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 4px;
      font-size: 12px;
    }

    .value {
      color: #fff;
      font-family: 'Digital-7', sans-serif; // 预设单位或自定义字体
      font-size: 20px;
      font-weight: bold;

      small {
        font-size: 12px;
        margin-left: 4px;
        color: #00ddff;
      }
    }
  }

  /* 列表项样式 */
  .list-item {
    display: flex;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    .rank-idx {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      margin-right: 15px;
      font-size: 12px;

      &.top3 {
        background: #00ddff;
        color: #000;
        font-weight: bold;
      }
    }

    .rank-name {
      flex: 1;
      color: #fff;
    }

    .rank-val {
      color: #00ddff;
      font-weight: bold;
    }
  }

  .news-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 12px;

    .dot {
      width: 6px;
      height: 6px;
      background: #00ddff;
      border-radius: 50%;
      margin-top: 6px;
      margin-right: 10px;
      box-shadow: 0 0 5px #00ddff;
    }

    .news-text {
      flex: 1;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.4;
      font-size: 13px;

      &:hover {
        color: #00ddff;
        cursor: pointer;
      }
    }
  }

  /* 辅助类 */
  .mt-20 {
    margin-top: 20px;
  }

  .h-300 {
    height: 280px;
  }

  .flex-1 {
    flex: 1;
  }
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 221, 255, 0.3);
  border-radius: 2px;
}
</style>