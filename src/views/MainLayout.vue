<template>
    <div class="main-layout">
        <Header />
        <div class="main-content">
    
            <!-- Main content goes here -->
            <HeroSection />
            <AboutSection />
            <ServicesSection />
        </div>
        <!-- <Footer /> -->
    </div>
</template>

<script setup>
import HeroSection from './HeroSection.vue';
import Header from '../components/Header.vue';
import AboutSection from './AboutSection.vue';
import ServicesSection from './ServicesSection.vue';
</script>

<style scoped>

.main-content {
    position: relative;
    z-index: 1;
    border-bottom: 10px solid #E3E3E3;
    box-sizing: border-box;
}
</style>
