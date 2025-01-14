import VueRouter from 'vue-router';
import { Context } from '@nuxt/types'
import { IPost } from '~/models/posts/post/IPost';
import { IUser } from '~/models/auth/user/IUser';

export interface INavigationService {
    navigateToLogin(config?: NavigationConfig): Promise<void>;

    navigateToRegister(config?: NavigationConfig): Promise<void>;

    navigateToHome(config?: NavigationConfig): Promise<void>;

    navigateToPost(config?: NavigateToPostConfig): Promise<void>;

    navigateToProfile(config?: NavigateToProfileConfig): Promise<void>;

    setVueRouter(vueRouter: VueRouter): void;
}

export interface NavigateToPostConfig extends NavigationConfig {
    post: IPost
}

export interface NavigateToProfileConfig extends NavigationConfig {
    user: IUser;
}

export interface NavigationConfig {
    nuxtContext?: Context;
}
