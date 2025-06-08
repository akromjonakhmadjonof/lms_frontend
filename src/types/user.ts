export interface User {
    id: number;
    uuid: string;
    full_name: string;
    email: string;
    password_hash: string;
    profile_image_url: string;
    phone_number: string;
    gender: 'MALE' | 'FEMALE' | 'OTHER';
    date_of_birth: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    last_login_at: string;
    refresh_token: string;
    tenant_id: string;
    timezone: string;
    bio: string;
}
