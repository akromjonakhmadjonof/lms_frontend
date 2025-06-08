export interface Role {
    id: number;
    uuid: string;
    name: string;
    label: string;
    description: string;
    priority: number;
    is_system: boolean;
    permissions: never[];
    tenant_id: string | null;
    created_at: string;
    updated_at: string;
}

