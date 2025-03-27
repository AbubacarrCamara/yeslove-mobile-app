import { AuthApiFactory } from "@/generated-api";
import axios from "axios";

class TokenRefreshService{
    startRefreshingToken(initialRefreshToken: string): void {
        let currentRefreshToken: string = initialRefreshToken;
        let expiresIn: number = 50_000;
        setInterval(() => {
            AuthApiFactory().postRefreshToken({refresh_token: currentRefreshToken})
            .then((response) => {
                currentRefreshToken = response.data.refresh_token ?? "";
                expiresIn = response.data.expires_in ?? 10_000;
                axios.defaults.headers.common['Authorization'] = response.data.access_token ?? "";
            })
        }, expiresIn);
    }
}

export const TOKEN_REFRESH_SERVICE = new TokenRefreshService();
