<template>
    <el-affix :offset="60">
        <el-input v-model="data.searchKeyword" class="w-50 m-2" size="large" placeholder="请输入关键字" @keydown="keyEnterHandle">
            <template #suffix>
                <el-icon>
                    <Search />
                </el-icon>
            </template>
        </el-input>
    </el-affix>
    <el-empty v-show="UIControl.noResult" description=" "></el-empty>
    <el-skeleton animated :loading="UIControl.renderLoading">
        <el-space wrap :size="10">
            <el-space v-for="(foodHeat, index) in data.foodHeat" :key="index" v-infinite-scroll="InfiteLoad">
                <el-card shadow="hover">
                    <template #header>
                        <div class="card-header">
                            <h4>{{ foodHeat.name }}</h4>
                        </div>
                    </template>

                    <el-image style="max-width: 300px;" lazy :src="foodHeat.img"></el-image>
                    <p>{{ foodHeat.desc }}</p>
                    <p>{{ foodHeat.heat }}</p>
                </el-card>
            </el-space>
        </el-space>
    </el-skeleton>
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
        Search
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

        function InfiteLoad() {
            console.log(1)
        }

        return {
            data,
            UIControl,
            keyEnterHandle,
            InfiteLoad
        }
    }
})
</script>

<style scoped></style>