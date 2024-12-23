<template>
    <header class="text-center py-4">
        <a href="/">
            <img src="/logo.png" alt="Logo" class="img-fluid" style="max-width: 100px;">
        </a>
        <nav class="mt-3">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/">ホーム<br><span class="fs-5">Home</span></NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/qualifications">資格<br><span class="fs-5">Qualifications</span></NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" href="/deliverables">成果物<br><span class="fs-5">Deliverables</span></NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>