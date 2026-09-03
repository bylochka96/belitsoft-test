export type formData = {
    fullName?: string;
    email: string;
    currentAddress?: string;
    permanentAddress?: string;
};

export function buildFormData(overrideValues: Partial<formData> = {}): formData {  
    return {
        fullName: "John Smith",
        email: "John.Smith@example.com",
        currentAddress: "current address 12345",
        permanentAddress: "permanent address 67890",
        ...overrideValues
    };
}