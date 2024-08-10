import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useAuthStore } from '~store/user.store';

class HttpService {
	private readonly fetchingService: AxiosInstance;
	private readonly baseUrl: string;
	private readonly apiVersion: string;

	constructor(
		baseUrl: string = process.env.SERVER_URL,
		fetchingService = axios,
		apiVersion: string = 'api',
	) {
		this.baseUrl = baseUrl;
		this.apiVersion = apiVersion;
		this.fetchingService = fetchingService;
	}

	private getFullApiUrl(url: string): string {
		return `${this.baseUrl}/${this.apiVersion}/${url}`;
	}

	private populateTokenToHeaderConfig(): { Authorization: string | null } {
		const { token } = useAuthStore.getState();

		return {
			Authorization: token ? `Bearer ${token}` : null,
		};
	}

	private extractUrlAndDataFromConfig({
		data: _data,
		url: _url,
		...configWithoutDataAndUrl
	}: AxiosRequestConfig): Omit<AxiosRequestConfig, 'data' | 'url'> {
		return configWithoutDataAndUrl;
	}

	get(
		config: AxiosRequestConfig,
		withAuth: boolean = true,
	): Promise<AxiosRequestConfig> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.get(
			this.getFullApiUrl(config.url),
			this.extractUrlAndDataFromConfig(config),
		);
	}

	async post(
		config: AxiosRequestConfig,
		withAuth: boolean = true,
	): Promise<AxiosRequestConfig> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.post(
			this.getFullApiUrl(config.url),
			config.data,
			this.extractUrlAndDataFromConfig(config),
		);
	}

	async put(
		config: AxiosRequestConfig,
		withAuth: boolean = true,
	): Promise<AxiosRequestConfig> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.put(
			this.getFullApiUrl(config.url),
			config.data,
			this.extractUrlAndDataFromConfig(config),
		);
	}

	async delete(
		config: AxiosRequestConfig,
		withAuth: boolean = true,
	): Promise<AxiosRequestConfig> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.delete(
			this.getFullApiUrl(config.url),
			this.extractUrlAndDataFromConfig(config),
		);
	}

	async patch(
		config: AxiosRequestConfig,
		withAuth: boolean = true,
	): Promise<AxiosRequestConfig> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return this.fetchingService.patch(
			this.getFullApiUrl(config.url!),
			config.data,
			this.extractUrlAndDataFromConfig(config),
		);
	}
}

export default HttpService;
