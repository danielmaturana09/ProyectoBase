#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Env, String};

#[contracttype]
#[derive(Clone, Debug, PartialEq)]
pub struct MaintenanceRecord {
    pub equipment_id: String,
    pub component: String,
    pub pdf_hash: String,
    pub timestamp: u64,
}

#[contracttype]
pub enum DataKey {
    Record(String),
}

#[contract]
pub struct SecureTraceContract;

#[contractimpl]
impl SecureTraceContract {
    pub fn register_record(
        env: Env,
        equipment_id: String,
        component: String,
        pdf_hash: String,
    ) -> bool {
        let timestamp = env.ledger().timestamp();

        let record = MaintenanceRecord {
            equipment_id: equipment_id.clone(),
            component,
            pdf_hash,
            timestamp,
        };

        env.storage().persistent().set(&DataKey::Record(equipment_id), &record);
        true
    }

    pub fn get_record(env: Env, equipment_id: String) -> Option<MaintenanceRecord> {
        env.storage().persistent().get(&DataKey::Record(equipment_id))
    }
}