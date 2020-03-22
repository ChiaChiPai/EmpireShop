<template>
  <div>
    <Alert></Alert>
    <FrontHeader></FrontHeader>
    <router-view></router-view>
    <FrontFooter></FrontFooter>
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
