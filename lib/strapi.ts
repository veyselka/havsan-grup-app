import type { ApiResponse, ApiError } from './types';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';
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

  const url = `${STRAPI_URL}${endpoint}${queryString}`;

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

// Type definitions for Strapi content types
export interface RobotikVideo {
  id: number;
  attributes: {
    title: string;
    videoURL: string;
    thumbnailURL?: string;
    orderIndex: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface AIService {
  id: number;
  attributes: {
    serviceName: string;
    description: string;
    category: 'education' | 'development' | 'consulting' | 'google-workspace';
    documentURL?: string;
    icon?: string;
    orderIndex: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface EnerjiSolution {
  id: number;
  attributes: {
    serviceType: string;
    description: string;
    technicalDetails: string;
    features: string[];
    fieldImages?: {
      data: Array<{
        id: number;
        attributes: {
          url: string;
          alternativeText: string;
          width: number;
          height: number;
        };
      }>;
    };
    orderIndex: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Reference {
  id: number;
  attributes: {
    companyName: string;
    websiteURL?: string;
    sector: string;
    logo?: {
      data: {
        id: number;
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
    orderIndex: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface SocialMedia {
  id: number;
  attributes: {
    platform: 'whatsapp' | 'linkedin' | 'instagram' | 'facebook' | 'twitter';
    url: string;
    iconName: string;
    isActive: boolean;
    orderIndex: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ContactInfo {
  id: number;
  attributes: {
    phone: string;
    email: string;
    address: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
    mapEmbedURL?: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface SiteSettings {
  id: number;
  attributes: {
    preloaderDuration: number;
    enableAnimations: boolean;
    maintenanceMode: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

/**
 * Fetch Robotik content (videos)
 */
export async function getRobotikContent(): Promise<RobotikVideo[]> {
  try {
    const response = await getEntries<RobotikVideo>('robotik-videos', {
      sort: 'orderIndex:asc',
      populate: '*',
    });
    return response.data || [];
  } catch (error) {
    console.error('Error fetching robotik content:', error);
    return [];
  }
}

/**
 * Fetch AI services
 */
export async function getAIServices(): Promise<AIService[]> {
  try {
    const response = await getEntries<AIService>('ai-services', {
      sort: 'orderIndex:asc',
      populate: '*',
    });
    return response.data || [];
  } catch (error) {
    console.error('Error fetching AI services:', error);
    return [];
  }
}

/**
 * Fetch Enerji solutions
 */
export async function getEnerjiSolutions(): Promise<EnerjiSolution[]> {
  try {
    const response = await getEntries<EnerjiSolution>('enerji-solutions', {
      sort: 'orderIndex:asc',
      populate: '*',
    });
    return response.data || [];
  } catch (error) {
    console.error('Error fetching enerji solutions:', error);
    return [];
  }
}

/**
 * Fetch references (client logos)
 */
export async function getReferences(): Promise<Reference[]> {
  try {
    const response = await getEntries<Reference>('references', {
      sort: 'orderIndex:asc',
      populate: '*',
    });
    return response.data || [];
  } catch (error) {
    console.error('Error fetching references:', error);
    return [];
  }
}

/**
 * Fetch social media links
 */
export async function getSocialMedia(): Promise<SocialMedia[]> {
  try {
    const response = await getEntries<SocialMedia>('social-medias', {
      'filters[isActive][$eq]': true,
      sort: 'orderIndex:asc',
    });
    return response.data || [];
  } catch (error) {
    console.error('Error fetching social media:', error);
    return [];
  }
}

/**
 * Fetch contact information (single type)
 */
export async function getContactInfo(): Promise<ContactInfo | null> {
  try {
    const response = await fetchAPI<ApiResponse<ContactInfo>>('/contact-info', {
      params: { populate: '*' },
    });
    return response.data || null;
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return null;
  }
}

/**
 * Fetch site settings (single type)
 */
export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const response = await fetchAPI<ApiResponse<SiteSettings>>('/site-setting');
    return response.data || null;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}
