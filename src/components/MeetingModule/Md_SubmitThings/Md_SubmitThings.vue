<template>
    <div class="Page">
        <div class="SearchRegion"> search</div>
        <div class="DataRegion">data</div>
        <div class="FunctionRegion">func</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.Page{
  display: flex;
  height: 100%;
  width: 100%;
  align-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1d5e0d;
}
.SearchRegion{
    display: flex;
    width: 100%;
    height: 10%;
    background-color: #aa901d
}

.DataRegion{
    display: flex;
    width: 100%;
    height: 80%;
    background-color: #aa901d
}
.FunctionRegion{
    display: flex;
    width: 100%;
    height: 10%;
    background-color: #30290b
}
</style>


