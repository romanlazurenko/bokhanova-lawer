<template>
    <div class="header">
        <div class="header-container">
            <div class="header-links">
                <HeaderLink class="header-link">Обо мне</HeaderLink>
                <HeaderLink class="header-link">Услуги</HeaderLink>
                <HeaderLink class="header-link">Как я работаю</HeaderLink>
                <HeaderLink class="header-link">Записаться</HeaderLink>
            </div>
            <div class="header-contacts">
                <div class="header-contact">
                    <img src="../assets/icons/whatsapp.svg" alt="phone">

                </div>
                <div class="header-contact">
                    <img src="../assets/icons/phone.svg" alt="phone">

                </div>
                <div class="header-contact">
                    <a href="tel:+4915772262253" class="phone-number">+49 157 722 622 53</a>
                </div>

            </div>
            <div class="header-dropdown">
                <Select class="header-dropdown-select" v-model="selectedLanguage" :options="languages"
                    optionLabel="name" optionValue="code" :pt="{
                        root: { class: 'custom-select-root' },
                        label: { class: 'custom-select-label' },
                        list: { class: 'custom-select-list' },
                        item: { class: 'custom-select-item' }
                    }" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import HeaderLink from './header/HeaderLink.vue';
import Select from 'primevue/select';

const selectedLanguage = ref('en');
const languages = ref([
    { name: 'RU', code: 'ru' },
    { name: 'EN', code: 'en' },
    { name: 'UA', code: 'ua' },
]);
</script>

<style lang="scss">
.header {
    width: 100%;
    background-color: #2A2A2D;
    outline: 10px solid #E3E3E3;
    outline-offset: -10px;
    outline-style: solid;
    outline-width: 10px;
    outline-color: #E3E3E3; 
}

.header-container {
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    height: 90px;
    display: flex;
    align-items: center;
}

.header-links {
    display: flex;
    align-items: center;
    margin-right: clamp(10px, 10%, 106px);
}

.header-link:last-child {
    margin-right: 0;
}

.header-link {
    display: inline-block;
    margin-right: 20px;
    padding: 7px 15px 7px 0;
}

.header-contacts {
    display: flex;
    align-items: center;
    margin-right: clamp(10px, 10%, 93px);
}

.header-contact:last-child {
    margin-right: 0;
}

.header-contact {
    cursor: pointer;
    margin-right: 30px;
}

.phone-number {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 22px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: inherit;
    text-decoration: none;
}

.header-dropdown {
    margin-left: auto;
}

.custom-select-root {
    background-color: transparent !important;
    padding: 7px 15px !important;
    border: 1px solid #fff !important;
    border-radius: 30px !important;

    .custom-select-label {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 22px;
        line-height: 22px;
        letter-spacing: 0.02em;
        color: inherit;
        text-decoration: none;
        padding: 0 !important;
    }

    .p-select-dropdown {
        width: 20px;
        color: #fff !important;
        padding-right: 0 !important;
        margin-left: 7px !important;
    }


}

.custom-select-list {
    .p-select-option.p-select-option-selected {
        // background-color: #333 !important;
        // color: #fff !important;
    }
}




.custom-select-input {
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 4px;
    color: #333;
}

.custom-select-panel {
    background-color: #fff;
    border: 1px solid #ccc;
}

.custom-select-item {
    padding: 0.5rem;
    color: #333;

    &.p-highlight {
        background-color: #007ad9;
        color: #fff;
    }
}
</style>
