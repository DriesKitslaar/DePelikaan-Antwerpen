// ==========================================
//    SUPABASE CONFIGURATIE
// ==========================================
// Vul hieronder je gegevens in na het aanmaken van je Supabase project.

const SUPABASE_URL = "https://tdzqvkgdztjywlqlltnt.supabase.co";
const SUPABASE_KEY = "sb_publishable_tyREoBC2HiV9JVFpEIPOhA_3sCM11R5";

// Initialize Client
// The library loads as 'supabase' globally. We need to instantiate a client.

if (typeof supabase !== 'undefined' && supabase.createClient && SUPABASE_URL !== "VUL_HIER_JE_PROJECT_URL_IN") {
    // Create the client
    const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    
    // Assign to a global variable that other scripts use
    // NOTE: We overwrite the library object with the client instance to keep other scripts simple
    window.supabase = client;
    console.log("Supabase connected!");
} else {
    console.warn("Supabase not configured or library not loaded. Falling back to data.js / LocalStorage.");
    // Ensure window.supabase is null so checks fail gracefully
    if (typeof supabase === 'undefined') window.supabase = null;
}



