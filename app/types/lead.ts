export interface Lead {
  id?: string;
  customer?: string;
  status?: "new" | "contacted" | "qualified" | "converted";
  assigned_to?: string;
  created_at: string;
}
