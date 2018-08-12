/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Sample transaction processor function.
 * @param {org.mediledger.ChangeStateToProduction} tx The transaction that changes the state of the pizza from to the production state.
 * @transaction
 */

function ChangeStateToProduction(tx) {

    tx.medicine.state = "production";
      
        // Get the asset registry for the pizza asset.
        return getAssetRegistry('org.mediledger.Medicine')
            .then(function (assetRegistry) {
    
                // Update the asset in the pizza asset registry.
                return assetRegistry.update(tx.medicine);
            });
    }
    
    /**
     * Sample transaction processor function.
     * @param {org.mediledger.ChangeStateToFreezing} tx The transaction that changes the state of the pizza from to the freezing state.
     * @transaction
     */
    
    function ChangeStateToFreezing(tx) {
    
    tx.medicine.state = "freezing";
      
        // Get the asset registry for the pizza asset.
        return getAssetRegistry('org.mediledger.Medicine')
            .then(function (assetRegistry) {
    
                // Update the asset in the pizza asset registry.
                return assetRegistry.update(tx.medicine);
            });
    }
    
    /**
     * Sample transaction processor function.
     * @param {org.mediledger.ChangeStateToPackaging} tx The transaction that changes the state of the pizza from to the packaging state.
     * @transaction
     */
    
    function ChangeStateToPackaging(tx) {
    
    tx.medicine.state = "packaging";
      
        // Get the asset registry for the pizza asset.
        return getAssetRegistry('org.mediledger.Medicine')
            .then(function (assetRegistry) {
    
                // Update the asset in the pizza asset registry.
                return assetRegistry.update(tx.medicine);
            });
    }
    
    /**
     * Sample transaction processor function.
     * @param {org.mediledger.ChangeStateToDistribution} tx The transaction that changes the state of the pizza from to the distribution state.
     * @transaction
     */
    
    function ChangeStateToDistribution(tx) {
    
    tx.medicine.state = "distribution";
      
        // Get the asset registry for the pizza asset.
        return getAssetRegistry('org.mediledger.Medicine')
            .then(function (assetRegistry) {
    
                // Update the asset in the pizza asset registry.
                return assetRegistry.update(tx.medicine);
            });
    }
    
    /**
     * Sample transaction processor function.
     * @param {org.mediledger.ChangeOwner} tx The transaction that changes the owner of the pizza (i.e. from Factory to Wholesaler).
     * @transaction
     */
    
    function ChangeOwner(tx) {
    
      tx.medicine.owner = tx.newOwner;
      
        // Get the asset registry for the pizza asset.
        return getAssetRegistry('org.mediledger.Medicine')
            .then(function (assetRegistry) {
    
                // Update the asset in the pizza asset registry.
                return assetRegistry.update(tx.medicine);
            });
    }
    
    
    
    