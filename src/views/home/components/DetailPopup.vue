<template>
  <div v-if="visible" class="detail-popup-mask" @click.self="close">
    <div class="detail-popup-container glass-card">
      <div class="popup-header">
        <span class="title">{{ data.name || '项目详情' }}</span>
        <div class="close-btn" @click="close">×</div>
      </div>

      <div class="popup-body">
        <!-- 核心四大模块 -->
        <div class="popup-grid">
          <!-- 1. 项目基本信息 -->
          <div class="module-box">
            <div class="module-title">项目基本信息</div>
            <div class="info-list">
              <div class="info-item"><label>电站名称：</label><span>{{ data.name }}</span></div>
              <div class="info-item"><label>项目类型：</label><span>{{ data.type === 'power' ? '光伏电站' : '储能电站' }}</span>
              </div>
              <div class="info-item"><label>项目区域：</label><span>{{ data.region || '华东地区' }}</span></div>
              <div class="info-item"><label>企业类型：</label><span>国有企业</span></div>
              <div class="info-item full"><label>企业简介：</label><span>领先的可再生能源投资运营商，致力于绿色能源转型。</span></div>
              <div class="info-item img-box">
                <label>电站照片：</label>
                <div class="mock-img">IMAGE_PLACEHOLDER</div>
              </div>
              <div class="info-item"><label>资产规模：</label><span>5.2 亿元</span></div>
              <div class="info-item"><label>发电时数：</label><span>1250 小时</span></div>
              <div class="info-item"><label>用户电价：</label><span>0.85 元/kWh</span></div>
              <div class="info-item"><label>上网方式：</label><span>自发自用，余电上网</span></div>
              <div class="info-item"><label>消纳率：</label><span>98.5%</span></div>
              <div class="info-item"><label>上网电价：</label><span>0.42 元/kWh</span></div>
            </div>
          </div>

          <!-- 2. 项目周期 -->
          <div class="module-box">
            <div class="module-title">项目周期</div>
            <div class="timeline">
              <div class="time-node" v-for="node in timelineData" :key="node.step">
                <div class="node-dot"></div>
                <div class="node-content">
                  <div class="node-step">{{ node.step }}</div>
                  <div class="node-time">{{ node.time }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 3. 资产运营 -->
          <div class="module-box">
            <div class="module-title">资产运营</div>
            <div class="chart-mock">
              <div class="bar-row" v-for="i in 4" :key="i">
                <span class="bar-label">运营指标 {{ i }}</span>
                <div class="bar-wrap">
                  <div class="bar-inner" :style="{ width: (70 + i * 5) + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- 4. 资产详情与财务 -->
          <div class="module-box">
            <div class="module-title">资产详情与财务</div>
            <div class="finance-list">
              <div class="fin-card">
                <div class="fin-val">￥12.5M</div>
                <div class="fin-lab">本月营收</div>
              </div>
              <div class="fin-card">
                <div class="fin-val">15.2%</div>
                <div class="fin-lab">预估收益率</div>
              </div>
              <div class="fin-card">
                <div class="fin-val">￥4.2M</div>
                <div class="fin-lab">运营支出</div>
              </div>
              <div class="fin-card">
                <div class="fin-val">A+</div>
                <div class="fin-lab">资产评级</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  visible: Boolean,
  data: Object
});

const emit = defineEmits(['update:visible']);

const close = () => {
  emit('update:visible', false);
};

const timelineData = [
  { step: '立项阶段完成', time: '2025-01-10' },
  { step: '工程建设启动', time: '2025-03-15' },
  { step: '设备安装调试', time: '2025-08-20' },
  { step: '正式并网发电', time: '2026-01-05' }
];

</script>

<style lang="scss" scoped>
.detail-popup-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}

.detail-popup-container {
  width: 1000px;
  max-height: 85vh;
  background: rgba(11, 64, 101, 0.9) !important;
  border: 1px solid #00ddff !important;
  display: flex;
  flex-direction: column;
  animation: popupFadeIn 0.3s ease-out;

  .popup-header {
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, #00ddff44 0%, transparent 100%);
    border-bottom: 1px solid #00ddff44;

    .title {
      font-size: 18px;
      font-weight: bold;
      color: #00ddff;
    }

    .close-btn {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }
  }

  .popup-body {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
  }
}

.popup-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.module-box {
  background: rgba(0, 221, 255, 0.05);
  border: 1px solid rgba(0, 221, 255, 0.1);
  padding: 15px;

  .module-title {
    font-size: 16px;
    color: #00ddff;
    margin-bottom: 15px;
    font-weight: 600;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      width: 4px;
      height: 16px;
      background: #00ddff;
      margin-right: 10px;
    }
  }
}

.info-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  .info-item {
    font-size: 13px;
    line-height: 20px;

    label {
      color: rgba(255, 255, 255, 0.6);
    }

    span {
      color: #fff;
    }

    &.full {
      grid-column: span 2;
    }

    &.img-box {
      grid-column: span 2;
    }
  }

  .mock-img {
    margin-top: 5px;
    height: 100px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px dashed rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.3);
    background-image: url('@/assets/images/image2.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}

.timeline {
  padding-left: 10px;

  .time-node {
    border-left: 1px solid #00ddff44;
    padding: 0 0 20px 20px;
    position: relative;

    &:last-child {
      border-left: none;
    }

    .node-dot {
      position: absolute;
      left: -6px;
      top: 0;
      width: 10px;
      height: 10px;
      background: #00ddff;
      border-radius: 50%;
      box-shadow: 0 0 10px #00ddff;
    }

    .node-step {
      font-size: 14px;
      color: #fff;
    }

    .node-time {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
}

.chart-mock {
  .bar-row {
    margin-bottom: 12px;

    .bar-label {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.7);
      display: block;
      margin-bottom: 4px;
    }

    .bar-wrap {
      height: 6px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
    }

    .bar-inner {
      height: 100%;
      background: linear-gradient(90deg, #00ddff, #0040ff);
      border-radius: 3px;
    }
  }
}

.finance-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  .fin-card {
    background: rgba(255, 255, 255, 0.03);
    padding: 15px;
    text-align: center;
    border-bottom: 2px solid #00ddff33;

    .fin-val {
      font-size: 18px;
      font-weight: bold;
      color: #ffcc00;
    }

    .fin-lab {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
      margin-top: 5px;
    }
  }
}

@keyframes popupFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
