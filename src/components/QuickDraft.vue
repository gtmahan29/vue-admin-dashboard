<template lang="">
    <div class="container">
        <div class="section-header">
            <h2>پیش‌نویس</h2>
        </div>
        <form @submit.prevent = "handleSubmit" class="quick-draft">
            <label>عنوان:</label>
            <input type="text" v-model="title" required>
            <label>محتوا:</label>
            <textarea rows="4"  v-model="content" required></textarea>
            <button>ذخیره‌ی پیش‌نویس</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('')
const content = ref('')

/**
 * تابع هندل‌کننده ایونت سابمیت برای ذخیره‌ی پیش‌نویس
 * @returns {void}
 */
function handleSubmit() {
    console.log(title.value, content.value);
}
</script>

<style lang="scss">
.container {
    background-color: #fff;
    width: 30%;
    padding: 1.5rem;

    .section-header {
        margin-bottom: 1rem;

        h2 {
            font-size: 1.6rem;
            font-weight: 900;
        }
    }

    form {
        display: flex;
        flex-direction: column;

        label {
            font-size: 1.3rem;
            margin-bottom: .5rem;
        }

        input,
        textarea {
            border: none;
            box-shadow: 0 0 0 1px rgba($color: #000, $alpha: 0.1);
            background-color: #fcfcfc;
            padding: .8rem;
            margin-bottom: 2rem;
            border-radius: 1rem;

            &:focus {
                outline: none;
                background-color: #fff;
                box-shadow: 0 0 0px 2px rgba($color: #000, $alpha: 0.1);
                transition: all 0.2s ease-in-out;
                border: none;
            }
        }

        textarea {
            resize: none;
        }

        button {
            border: none;
            border-radius: 1rem;
            padding: 1rem 0;
            background-color: #e7e7e7;
            color: #000;
            font-weight: bold;
            cursor: pointer;

            &:hover {
                background-color: rgba($color: #066115, $alpha: 1);
                color: #fff;
                transition: all .1s linear;
            }
        }
    }
}
</style>