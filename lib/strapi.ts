import { API_ENDPOINTS } from './constants';
import type { ApiResponse, ApiError } from './types';

const STRAPI_URL = API_ENDPOINTS.strapi;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface FetchOptions extends RequestInit {
  params?: Record<string, any>;
}

/**
 * Base fetch function for Strapi API
 */
async function fetchAPI<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { params, ...init } = options;

  // Build query string
  const queryString = params
    ? '?' +
      Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&')
    : '';

  const url = `${STRAPI_URL}/api${endpoint}${queryString}`;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
    ...init.headers,
  };

  const response = await fetch(url, {
    ...init,
    headers,
  });

  if (!response.ok) {
    const error: ApiError = await response.json();
    throw new Error(error.error.message || 'Failed to fetch from Strapi');
  }

  return response.json();
}

/**
 * Get all entries from a collection
 */
export async function getEntries<T>(
  collection: string,
  params?: Record<string, any>
): Promise<ApiResponse<T[]>> {
  return fetchAPI<ApiResponse<T[]>>(`/${collection}`, { params });
}

/**
 * Get a single entry by ID
 */
export async function getEntry<T>(
  collection: string,
  id: number | string,
  params?: Record<string, any>
): Promise<ApiResponse<T>> {
  return fetchAPI<ApiResponse<T>>(`/${collection}/${id}`, { params });
}

/**
 * Get a single entry by slug
 */
export async function getEntryBySlug<T>(
  collection: string,
  slug: string,
  params?: Record<string, any>
): Promise<ApiResponse<T[]>> {
  return fetchAPI<ApiResponse<T[]>>(`/${collection}`, {
    params: {
      'filters[slug][$eq]': slug,
      ...params,
    },
  });
}

/**
 * Create a new entry
 */
export async function createEntry<T>(
  collection: string,
  data: any
): Promise<ApiResponse<T>> {
  return fetchAPI<ApiResponse<T>>(`/${collection}`, {
    method: 'POST',
    body: JSON.stringify({ data }),
  });
}

/**
 * Update an entry
 */
export async function updateEntry<T>(
  collection: string,
  id: number | string,
  data: any
): Promise<ApiResponse<T>> {
  return fetchAPI<ApiResponse<T>>(`/${collection}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ data }),
  });
}

/**
 * Delete an entry
 */
export async function deleteEntry<T>(
  collection: string,
  id: number | string
): Promise<ApiResponse<T>> {
  return fetchAPI<ApiResponse<T>>(`/${collection}/${id}`, {
    method: 'DELETE',
  });
}

/**
 * Helper function to get image URL
 */
export function getStrapiImageUrl(path?: string): string {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${STRAPI_URL}${path}`;
}
