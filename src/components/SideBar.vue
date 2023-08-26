<template>
    <aside class="sidebar">
        <div class="logo">
            <img src="../assets/logo.svg" alt="Dashboard">
        </div>
        <div class="menu">
            <RouterLink v-for="menuItem in menuItems" :key="menuItem.path" class="button" :to="menuItem.path">
                <font-awesome-icon :icon="menuItem.icon" id="sidebar-icon" />
                <span class="text">{{ menuItem.label }}</span>
            </RouterLink>
        </div>
    </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const menuItems = [
    {
        path: '/',
        label: 'داشبورد',
        icon: 'fa-solid fa-table-columns'
    },
    {
        path: '/posts',
        label: 'پست‌ها',
        icon: 'fa-solid fa-pen-to-square'
    },
    {
        path: '/users',
        label: 'کاربران',
        icon: 'fa-solid fa-users'
    },
    {
        path: '/statistics',
        label: 'آمار',
        icon: 'fa-solid fa-chart-line'
    },
]


</script>

<style lang="scss">
@import url(../assets/main.scss);

.sidebar {
    display: flex;
    flex-direction: column;
    width: 200px;
    min-height: 100vh;
    background-color: #fff;
    overflow: hidden;

    .logo {
        margin-bottom: 3rem;
        padding: 1.5rem;

        img {
            width: 3rem;
        }
    }

    .menu {
        display: flex;
        flex-direction: column;
        font-size: 1.3rem;

        .button {
            padding: 1rem 2rem;
            display: flex;
            align-items: center;

            svg {
                font-size: 1.3rem;
                path {
                 fill: #000;
                }
            } 

            &.router-link-exact-active {
                background-color: #25c16e;

                span {
                    color: #fff;
                }

                svg path {
                    fill: #fff;
                }

            }

            &:not(.router-link-exact-active) {
                &:hover {
                    background-color: #f5f5f5;
                    transition: all .2s ease-in-out;
                }
            }
        }

        span {
            margin-right: .8rem;
        }
    }
}
</style>