<template>
  <div class="h-100">
    <div class="wrapper">
      <Alert></Alert>
      <FrontHeader class="header"></FrontHeader>
      <div class="content">
        <router-view></router-view>
      </div>
      <FrontFooter class="footer"></FrontFooter>
    </div>
  </div>
</template>

<script>
import FrontHeader from '../../components/FrontHeader'
import FrontFooter from '../../components/FrontFooter'
import Alert from '../../components/AlertMessage'

export default {
  components: {
    FrontHeader,
    FrontFooter,
    Alert
  }
}
</script>

<style lang="scss">
  .wrapper{
    display: flex;flex-direction: column;min-height: 100%;
    }
  .header{
    flex: 0;
    }
  .content{
    flex: 1;
    }
  .footer{
    flex: 0;
  }
</style>
