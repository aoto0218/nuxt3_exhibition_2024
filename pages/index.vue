<script setup>
import { useAge } from '@/composables/useAge';

const { age } = useAge('2006-02-18');
</script>

<template>
    <NuxtLayout>
        <div class="container py-5">
            <div class="row g-4 justify-content-center">
                <div class="col-md-5">
                    <div class="card bg-secondary text-white text-center p-4">
                        <div class="card-body">
                            <h2 class="card-title">最近取得した資格</h2>
                            <ul class="list-unstyled">
                                <li>MOS PowerPoint</li>
                                <li>AI-900</li>
                                <li>　</li>
                            </ul>
                            <a href="/qualifications" class="btn btn-dark">詳しく見る</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="card bg-secondary text-white text-center p-4">
                        <div class="card-body">
                            <h2 class="card-title">最近の成果物</h2>
                            <ul class="list-unstyled">
                                <li>タイピングゲーム</li>
                                <li>ポートフォリオサイト</li>
                                <li>おみくじゲーム</li>
                            </ul>
                            <a href="/deliverables" class="btn btn-dark">詳しく見る</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">
                <h1 class="mb-3">自己紹介</h1>
                <h2 class="mb-4">About Me</h2>
                <ul class="list-unstyled">
                    <li>氏名：早苗 碧大（さなえ あおと）</li>
                    <li>年齢：{{ age }}歳</li>
                    <li>誕生日：2月18日</li>
                    <li>出身地：滋賀県米原市（現在は京都で一人暮らし）</li>
                </ul>
                <img src="/shiga.jpg" alt="滋賀県の地図" class="img-fluid w-50 rounded shadow">
            </div>
        </div>
    </NuxtLayout>
</template>
