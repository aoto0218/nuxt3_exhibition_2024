<template>
    <NuxtLayout>
        <div class="py-5">
            <div class="container my-5">
                <h1 class="text-center mb-4">最近作成した成果物</h1>
                <div class="row">
                    <div class="col-md-6 mb-4" v-for="project in projects" :key="project.title">
                        <div class="card shadow-sm h-100">
                            <div class="card-body">
                                <h5 class="card-title text-primary">{{ project.title }}</h5>
                                <p class="card-text">{{ project.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
    const { projects } = useProjects();
</script>