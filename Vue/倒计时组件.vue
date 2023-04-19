<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>发件人</th>
          <th>邮件标题</th>
          <th>发件时间</th>
          <th>是否包含附件</th>
          <th>附件大小</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="email in emailList" :key="email.id">
          <td>{{ email.sender }}</td>
          <td>{{ email.title }}</td>
          <td>{{ formatDate(email.date) }}</td>
          <td>{{ email.hasExtraContent ? '是' : '否' }}</td>
          <td>{{ email.size }} KB</td>
          <td>
            <button @click="deleteEmail(email.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <button @click="debounce(refreshEmails, 1500)">刷新</button>
      <button :disabled="currentPage <= 1" @click="prevPage"> 上一页</button>
      <button :disabled="currentPage >= maxPage" @click="nextPage"> 下一页</button>
    </div>
  </div>
</template >

<script setup>
// 2. 组件设计思路
// 请用你了解的前端技术设计一个组件（vue， anguar， react都可以），展示电子邮箱列表的页面， 数据结构可以自己定义， 邮箱列表字段最少包括（发件人，邮件标题，发件时间，是否包含附件，附件大小），带分页功能， 至少包含“刷新”， “删除邮件”两个方法。 这个题主要考组件的设计思路， 具体实现可以不用写太多。
// 使用vue3.2实现，可以复制到vue3演练场查看

import { ref, computed } from 'vue';

const emails = ref([
  { id: 1, sender: 'test@example.com', title: '关于会议的通知', date: '2022-01-01', hasExtraContent: true, size: 1024 },
  { id: 2, sender: 'bob@qq.com', title: '明天的行程', date: '2022-01-02', hasExtraContent: false, size: 0 },
  { id: 3, sender: '2253541907@example.com', title: '请查收附件', date: '2022-01-03', hasExtraContent: true, size: 512 },
  { id: 4, sender: 'david@ali.com', title: '关于项目的进展', date: '2022-01-04', hasExtraContent: false, size: 0 },
  { id: 5, sender: 'eve@example.com', title: '新年快乐', date: '2022-01-05', hasExtraContent: false, size: 0 },
  { id: 6, sender: 'text@361.com', title: '招聘信息', date: '2022-01-06', hasExtraContent: true, size: 2048 },
]);

const pageSize = 3;
const currentPage = ref(1);

const emailList = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return emails.value.slice(start, end);
});

const maxPage = computed(() => {
  return Math.ceil(emails.value.length / pageSize);
});

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function deleteEmail(id) {
  const index = emails.value.findIndex(email => email.id === id);
  emails.value.splice(index, 1);
}

// 使用防抖优化刷新操作
function debounce(fn, delay = 1000) {
  let time = null
  function _debounce(...args) {
    if (time) {
      clearTimeout(time)
    }
    time = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
  return _debounce
}

function refreshEmails() {
  // 模拟刷新
  // emails.value = axios.get('<https://emailInfo.com>')
  console.log('刷新邮件');
}

function prevPage() {
  currentPage.value--;
}

function nextPage() {
  currentPage.value++;
}
</script>
