import selectedOrganizationStorage from "../services/selected-organization-storage.ts";

export function useSelectedOrganization(){
  return {
    setSelectedOrganization: selectedOrganizationStorage.setOrganization,
    getSelectedOrganization: () => selectedOrganizationStorage.getOrganization()
  }
}
