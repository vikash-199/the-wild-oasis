import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ofumydxoblahzdnxpqmi.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mdW15ZHhvYmxhaHpkbnhwcW1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyNTM3MzgsImV4cCI6MjAzMDgyOTczOH0._y5rd4c_QW00nDssB5IAFILkSoMYC7sGbuADGANA7qA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
