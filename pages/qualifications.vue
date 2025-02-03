<template>
    <NuxtLayout>
        <div class="container py-5">
            <h1 class="text-center mb-4">最近取得した資格</h1>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div v-for="(qualification, index) in qualifications" :key="index" class="card mb-4">
                        <div class="card-body">
                            <h3 class="card-title">{{ qualification.name }}</h3>
                            <div v-for="(desc, idx) in qualification.description" :key="idx">
                                <p class="card-text">{{ desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
    import { useQualifications } from '@/composables/useQualifications';

    const { qualifications } = useQualifications();
</script>