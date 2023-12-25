<template>
    <div class="options-container">
        <option value="">Opcion 1</option>
        <option value="">Opcion 2</option>
        <option value="">Opcion 3</option>
        <option value="">Opcion 4</option>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .options-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    option{
        width: 300px;
        height: 10px;
        padding: 10px;
        margin: 10px;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
        transition: .24s;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1);
    }

    option:hover{
        background: #000000;
        color: #fff;
        scale: 1.05;
    }
    
</style>