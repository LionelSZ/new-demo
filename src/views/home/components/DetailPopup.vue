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
  background: rgba(3, 8, 22, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(6px);
}

.detail-popup-container {
  width: 1200px;
  max-height: 92vh;
  background: rgba(11, 46, 75, 0.85);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 195, 255, 0.4);
  box-shadow: inset 0 0 30px rgba(0, 195, 255, 0.15), 0 15px 30px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  animation: popupFadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  .popup-header {
    height: 56px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, rgba(0, 221, 255, 0.15) 0%, transparent 100%);
    border-bottom: 1px solid rgba(0, 221, 255, 0.2);

    .title {
      font-size: 18px;
      font-weight: 600;
      color: #00ddff;
      letter-spacing: 1px;
    }

    .close-btn {
      font-size: 28px;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;
      transition: color 0.3s, transform 0.3s;

      &:hover {
        color: #00ddff;
        transform: rotate(90deg);
      }
    }
  }

  .popup-body {
    flex: 1;
    padding: 24px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 221, 255, 0.3);
      border-radius: 2px;
    }
  }
}

.popup-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.module-box {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 221, 255, 0.04);
    border-color: rgba(0, 221, 255, 0.2);
    box-shadow: inset 0 0 20px rgba(0, 195, 255, 0.05);
  }

  .module-title {
    font-size: 16px;
    color: #00ddff;
    margin-bottom: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      width: 4px;
      height: 16px;
      background: #00ddff;
      margin-right: 10px;
      border-radius: 2px;
    }
  }
}

.info-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  .info-item {
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: flex-start;

    label {
      color: rgba(255, 255, 255, 0.7);
      width: 75px;
      flex-shrink: 0;
    }

    span {
      color: #fff;
      font-weight: 500;
    }

    &.full {
      grid-column: span 2;
    }

    &.img-box {
      grid-column: span 2;
      flex-direction: column;

      label {
        margin-bottom: 8px;
      }
    }
  }

  .mock-img {
    width: 100%;
    height: 140px;
    background: rgba(0, 195, 255, 0.05);
    border: 1px dashed rgba(0, 195, 255, 0.3);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 221, 255, 0.5);
    background-image: url('@/assets/images/image2.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.3s;

    &:hover {
      border-color: #00ddff;
    }
  }
}

.timeline {
  padding-left: 10px;
  margin-top: 10px;

  .time-node {
    border-left: 1px dashed rgba(0, 221, 255, 0.3);
    padding: 0 0 25px 25px;
    position: relative;
    transition: all 0.3s;

    &:last-child {
      border-left: none;
      padding-bottom: 0;
    }

    &:hover {
      .node-dot {
        transform: scale(1.2);
        box-shadow: 0 0 15px #00ddff;
      }

      .node-step {
        color: #00ddff;
      }
    }

    .node-dot {
      position: absolute;
      left: -6px;
      top: 2px;
      width: 11px;
      height: 11px;
      background: #00ddff;
      border-radius: 50%;
      box-shadow: 0 0 8px #00ddff;
      transition: all 0.3s;
    }

    .node-step {
      font-size: 14px;
      color: #fff;
      font-weight: 500;
      margin-bottom: 4px;
      transition: color 0.3s;
    }

    .node-time {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.5);
      font-family: 'Digital-7', Arial, sans-serif;
      letter-spacing: 0.5px;
    }
  }
}

.chart-mock {
  padding-top: 5px;

  .bar-row {
    margin-bottom: 18px;

    .bar-label {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.7);
      display: block;
      margin-bottom: 8px;
    }

    .bar-wrap {
      height: 8px;
      background: rgba(0, 195, 255, 0.1);
      border-radius: 4px;
      overflow: hidden;
    }

    .bar-inner {
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 195, 255, 0.3), #00ddff);
      border-radius: 4px;
      position: relative;
      transition: width 1s ease-out;

      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 10px;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 0 8px #fff;
        opacity: 0.8;
      }
    }
  }
}

.finance-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding-top: 5px;

  .fin-card {
    background: rgba(0, 195, 255, 0.05);
    border: 1px solid rgba(0, 195, 255, 0.1);
    border-radius: 4px;
    padding: 16px;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 195, 255, 0.1);
      border-color: rgba(0, 195, 255, 0.3);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .fin-val {
      font-family: 'Digital-7', sans-serif;
      font-size: 26px;
      font-weight: bold;
      color: #00ddff;
      text-shadow: 0 0 10px rgba(0, 221, 255, 0.4);
      margin-bottom: 6px;
    }

    .fin-lab {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
}

@keyframes popupFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
