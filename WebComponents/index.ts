window.onload = () => {
  class Wujie extends HTMLElement {
    constructor() {
      super();
      // 创建shadowDom 天然的样式隔离
      let dom = this.attachShadow({ mode: "open" })
      let template = document.querySelector('#wu-jie') as HTMLTemplateElement
      dom.appendChild(template.content.cloneNode(true))
      // 获取参数
      console.log(this.getAttr('age'));
    }
    private getAttr(attr: string) {
      return this.getAttribute(attr)
    }
    //生命周期自动触发有东西插入
    connectedCallback() {
      console.log('类似于vue的mounted');
    }
    //生命周期卸载
    disconnectedCallback() {
      console.log('类似于vue的destory');
    }
    //跟watch类似
    attributeChangedCallback(name: any, oldVal: any, newVal: any) {
      console.log('跟vue的watch 类似 有属性发生变化自动触发');
    }
  }
  // 类似于vue组件，是用原生js写的一个组件
  window.customElements.define('wu-jie', Wujie);
}
