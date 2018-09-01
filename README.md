# mediledger

A medicine supply chain and distribution system.


composer archive create -t dir -n .


composer network install --card PeerAdmin@hlfv1 --archiveFile mediledger@0.0.1.bna

composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw  --file networkadmin.card --networkName mediledger --networkVersion 0.0.1

composer card import --file networkadmin.card

composer network ping --card admin@mediledger

composer network ping --card admin@mediledger



composer-rest-server




To restart the REST server using the same options, issue the following command:
composer-rest-server -c admin@mediledger -n never -w true
