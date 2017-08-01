<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
//常用样式
    /** 文本省略 **/
  .text-autocut{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
/** 边框内阴影 **/
.inner-shadow(@param1,@param2,@param3,@opacity){
  box-shadow: inset @param1 @param2 @param3 rgba(0,0,0,@opacity);
}
/** 颜色渐变 **/
.gradient(@origin: top, @startColor, @endColor){
  background-color:@startColor/2 + @endColor/2;
  filter:~"progid:DXImageTransform.Microsoft.gradient(startColorstr='@{startColor}', endColorstr='@{endColor}')";
  background-image: -webkit-linear-gradient(@origin, @startColor, @endColor);
  background-image: linear-gradient(@origin, @startColor, @endColor);
}
/** 元素过渡效果 **/
.transition(@time: 1s, @prop: all, @ease: ease-in-out){
  -webkit-transition: @prop @time @ease;
  transition: @prop @time @ease;
}
/** 三角形 **/
.trangle(@width: 8px, @pram1: transparent, @pram2: transparent, @pram3: transparent, @pram4: transparent){
  width: 0;
  height: 0;
  border-style: solid;
  border-width: @width;
  border-color: @pram1 @pram2 @pram3 @pram4;
}
/** 调色板 **/
@base: #663333;
@complement1: spin(@base, 180);
@complement2: darken(spin(@base, 180), 5%);
@lighten1: lighten(@base, 15%);
@lighten2: lighten(@base, 30%);
/** 文本折行 **/
.wrap{
  text-wrap: wrap;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  word-wrap: break-word;
}
  body{
    background-color: #FFF;
  }
</style>
