<template>
        <div class="main-wrapper"></div>
    <div class="services-section">
        <div class="services-section-container">
            <div class="services-section-content">
                <MainHeader value="УСЛУГИ" class="services-section-content-title" />
            </div>
            <div class="services-section-grid">
                <!-- Germany column -->
                <div class="service-block-header block-germany-header">Консультации и сопровождение в Германии</div>
                <ul class="service-block-list block-germany-list">
                    <li><img src="../assets/icons/check-primary.svg" alt="check" class="check-icon" />Визы и разрешения на проживание</li>
                    <li><img src="../assets/icons/check-primary.svg" alt="check" class="check-icon" />Воссоединение семьи</li>
                    <li><img src="../assets/icons/check-primary.svg" alt="check" class="check-icon" />Гражданство и натурализация</li>
                    <li><img src="../assets/icons/check-primary.svg" alt="check" class="check-icon" />Свобода передвижения в ЕС</li>
                    <li><img src="../assets/icons/check-primary.svg" alt="check" class="check-icon" />Сопровождение и представительство интересов в посольствах, консульствах и государственных учреждениях Германии</li>
                </ul>
                <!-- Ukraine column -->
                <div class="service-block-header block-ukraine-header">Юридическая поддержка в Украине</div>
                <ul class="service-block-list block-ukraine-list">
                    <li><img src="../assets/icons/check-secondary.svg" alt="check" class="check-icon" />Представительство и защита интересов в судах</li>
                    <li><img src="../assets/icons/check-secondary.svg" alt="check" class="check-icon" />Составление заявлений, претензий, договоров, расписок и других правовых документов</li>
                    <li><img src="../assets/icons/check-secondary.svg" alt="check" class="check-icon" />Консультации по семейным, имущественным и хозяйственным вопросам по украинскому праву</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import MainHeader from '../components/header/MainHeader.vue';
</script>

<style scoped>
.main-wrapper {
    height: 675px;
    display: flex;
    position: relative;
    border: 10px solid #E3E3E3;
    border-top: none;
}
.service-block ul li{
    display: flex;
    align-items: center;
    gap: 10px;
}
.services-section {
    position: relative;
}

.services-section-container {
    max-width: 1170px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.services-section-grid {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: auto 1fr;
    gap: 10px;
    margin-top: 40px;
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
}

.service-block {
    background: #fff;
    border: 1px solid #2A2A2D;
    padding: 32px 24px 24px 24px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    position: relative;
}

.service-block-header {
    font-weight: 500;
    font-size: 20px;
    padding: 16px 0;
    text-align: center;
    border: 1px solid #2A2A2D;
    background: #fff;
}

.block-germany-header {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    background: #222;
    color: #fff;
}

.block-ukraine-header {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    background: linear-gradient(90deg, #97AFBA 0%, #658898 100%);
    color: #fff;
    border: none;
}

.service-block-list {
    background: #fff;
    border: 1px solid #2A2A2D;
    padding: 32px 24px 24px 24px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    position: relative;
    margin: 0;
    list-style: none;
}

.block-germany-list {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}

.block-ukraine-list {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
}

.service-block-list li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 0;
    margin-bottom: 16px;
    color: #222;
}

.check-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-top: 2px;
}
</style>
