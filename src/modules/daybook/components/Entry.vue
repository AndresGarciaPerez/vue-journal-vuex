<template>
    <div class="entry-cointer mb-3 pointer p-2"
        @click="$router.push({name:'entry', params: {id:10}})">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">31 </span>
            <span class="mx-1 fs-5">Agosto</span>
            <span class="mx-2 fw-light">2022, Miercoles</span>
        </div>


        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nesciunt? Est eum repellat earum placeat obcaecati aperiam aliquid tenetur adipisci accusantium culpa magnam, error neque, laborum reiciendis quisquam doloribus laboriosam.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .entry-cointer {
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover{
            background-color: lighten($color: grey, $amount: 38);
            transition: 0.2s all ease-in;
        }


        .entry-description{
            font-size: 12px;
        }
    }


</style>