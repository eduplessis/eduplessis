<template>
    <ContentList path="/blog" :where="{type:'blog'}" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
            <Nuxt-link :to="article._path">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
            </Nuxt-link>
        </div>
    </ContentList>
</template>