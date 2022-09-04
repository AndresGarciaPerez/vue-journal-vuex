<template>
    <button class="btn btn-primary">
        <i class="fa fa-x2"
            :class="icon"
            >
        </i>
    </button>
</template>

<script>
export default {
    props:{
        icon: {
            type: String,
            default: 'fa-plus'
        }
    }
}
</script>

<style lang="scss" scoped>

button {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        border-radius: 100%;
    }

</style>