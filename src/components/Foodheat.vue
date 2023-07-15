<template>
    <div class="container-base foodheat-container">
        <div class="footheat-search-container">
            <span class="foodheat-search-title"> 😊 </span>
            <ElInput clearable autofocus style="width:300px" v-model="data.searchKeyword" class="w-50 m-2" size="large"
                placeholder="请输入关键字" @keydown="keyEnterHandle">
            </ElInput>
            <span class="foodheat-search-title"> 🔍 </span>
        </div>
        <ElEmpty v-show="UIControl.noResult" description=" "></ElEmpty>
        <ElSkeleton animated :loading="UIControl.renderLoading">
            <ElSpace wrap alignment="start">
                <ElCard shadow="hover" style="width:250px;height: auto;" v-for="(foodHeat, index) in data.foodHeat"
                    :key="index">
                    <template #header>
                        <div class="card-header">
                            <h4>{{ foodHeat.name }}</h4>
                        </div>
                    </template>

                    <ElImage lazy :src="foodHeat.img"></ElImage>
                    <p>{{ foodHeat.desc }}</p>
                    <p>{{ foodHeat.heat }}</p>
                </ElCard>
            </ElSpace>
        </ElSkeleton>
    </div>
    <el-backtop :right="100" :bottom="100" />
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue'
import { getSeachFoodheatAsnyc, FoodHeat } from '@/api/api-oioweb'
import { Search } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
    name: 'App',
    components: {
        Search,
    },
    setup() {

        //UI控制
        let UIControl = reactive({
            renderLoading: false,
            noResult: false
        })

        let foodHeat = new Array<FoodHeat>()
        let data = reactive({
            foodHeat,
            searchKeyword: ''
        })


        // methods
        function keyEnterHandle(e) {
            if (e.keyCode !== 13) {
                return
            }

            if (!e.target.value) {
                ElMessage('请输入关键字')
                return
            }

            UIControl.renderLoading = true
            getSeachFoodheatAsnyc(data.searchKeyword).then(res => {
                UIControl.noResult = !res.result || res.result.length <= 0;
                data.foodHeat = res.result
            }).finally(() => {
                UIControl.renderLoading = false
            })
        }

        return {
            data,
            UIControl,
            keyEnterHandle
        }
    }
})
</script>

<style scoped lang="less">
.foodheat-container {
    height: 100%;
    box-sizing: border-box;
}

.footheat-search-container {
    width: 450px;
    margin: 0 auto;
    padding: 8px;
}

.foodheat-search-title {
    color: var(--el-color-primary);
}
</style>