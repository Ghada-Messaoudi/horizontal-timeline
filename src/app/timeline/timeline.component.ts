import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StatusesComponent } from './statuses/statuses.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  medium;
  panelOpenState = false;
  data = {
    "id": 7922,
    "name": "Demo shipment",
    "tradeflow_id": 7580,
    "uuid_id": null,
    "created_at": "2019-09-09 13:16:16",
    "updated_at": "2019-09-09 13:16:16",
    "stage": 0,
    "last_status_phase": null,
    "object_id": null,
    "event_date": null,
    "access_rights": [
      {
        "id": 22726,
        "object_id": 7922,
        "entity_id": 7,
        "permission": "write",
        "created_at": null,
        "updated_at": null,
        "entity": {
          "id": 7,
          "uuid_id": 251,
          "name": "Dockflow Support Team",
          "name_short": null,
          "legal_form": null,
          "registered_office_address_id": null,
          "created_at": null,
          "updated_at": null
        }
      },
      {
        "id": 22725,
        "object_id": 7922,
        "entity_id": 1269,
        "permission": "write",
        "created_at": null,
        "updated_at": null,
        "entity": {
          "id": 1269,
          "uuid_id": null,
          "name": "AIESEC",
          "name_short": null,
          "legal_form": null,
          "registered_office_address_id": null,
          "created_at": "2019-09-09 13:16:16",
          "updated_at": "2019-09-09 13:16:16"
        }
      }
    ],
    "statuses": [

    ],
    "transport_unit_sub_shipments": [

    ],
    "road_shipments": [

    ],
    "rail_shipments": [

    ],
    "sea_shipments": [
      {
        "id": 7820,
        "shipment_sequence_number": 0,
        "tradeflow_id": 7580,
        "shipment_id": 7922,
        "uuid_id": null,
        "carrier_id": 1229,
        "inttra_reference": null,
        "booking_reference": "EID0249864",
        "bill_of_lading_reference": "EID0249864",
        "created_at": "2019-09-09 13:16:16",
        "updated_at": "2019-09-09 13:16:16",
        "last_status_phase": null,
        "object_id": 7820,
        "event_date": "2019-05-06 03:43:00",
        "humanName": "SeaShipment humanname",
        "type": "sea_shipment",
        "statuses": [
          {
            "id": 71852,
            "message": "Discharged",
            "phase": null,
            "type": "info",
            "specific_status_type": "Dockflow\\Docky\\Integrations\\INTTRAConMegs\\DataElements\\INTTRAContext\\INTTRAShipmentStatus",
            "specific_status_id": 49060,
            "object_type": "Docky\\Shipment\\DataElements\\SeaShipment\\SeaShipment",
            "object_id": 7820,
            "event_date": "2019-05-06T03:43:00+00:00",
            "created_at": "2019-09-09 13:16:19",
            "updated_at": "2019-09-09 13:16:19",
            "tradeflow_id": 7580,
            "shipment_condition_reading_source_id": 10,
            "transport_unit_id": 1640,
            "location_id": null,
            "level": "SeaShipment",
            "specific_status": {
              "id": 49060,
              "created_at": "2019-09-09 13:16:19",
              "updated_at": "2019-09-09 13:16:19",
              "xml_message": "",
              "raw_attribute": "xml_message",
              "raw_filetype": "xml"
            }
          },
          {
            "id": 71851,
            "message": "Loaded on board",
            "phase": null,
            "type": "info",
            "specific_status_type": "Dockflow\\Docky\\Integrations\\INTTRAConMegs\\DataElements\\INTTRAContext\\INTTRAShipmentStatus",
            "specific_status_id": 49059,
            "object_type": "Docky\\Shipment\\DataElements\\SeaShipment\\SeaShipment",
            "object_id": 7820,
            "event_date": "2019-05-01T10:16:00+00:00",
            "created_at": "2019-09-09 13:16:19",
            "updated_at": "2019-09-09 13:16:19",
            "tradeflow_id": 7580,
            "shipment_condition_reading_source_id": 10,
            "transport_unit_id": 1640,
            "location_id": null,
            "level": "SeaShipment",
            "specific_status": {
              "id": 49059,
              "created_at": "2019-09-09 13:16:19",
              "updated_at": "2019-09-09 13:16:19",
              "xml_message": "",
              "raw_attribute": "xml_message",
              "raw_filetype": "xml"
            }
          },
          {
            "id": 71850,
            "message": "Discharged in transhipment",
            "phase": null,
            "type": "info",
            "specific_status_type": "Dockflow\\Docky\\Integrations\\INTTRAConMegs\\DataElements\\INTTRAContext\\INTTRAShipmentStatus",
            "specific_status_id": 49058,
            "object_type": "Docky\\Shipment\\DataElements\\SeaShipment\\SeaShipment",
            "object_id": 7820,
            "event_date": "2019-04-23T06:17:00+00:00",
            "created_at": "2019-09-09 13:16:17",
            "updated_at": "2019-09-09 13:16:17",
            "tradeflow_id": 7580,
            "shipment_condition_reading_source_id": 10,
            "transport_unit_id": 1640,
            "location_id": null,
            "level": "SeaShipment",
            "specific_status": {
              "id": 49058,
              "created_at": "2019-09-09 13:16:17",
              "updated_at": "2019-09-09 13:16:17",
              "xml_message": "",
              "raw_attribute": "xml_message",
              "raw_filetype": "xml"
            }
          },
          {
            "id": 71849,
            "message": "Loaded on board",
            "phase": null,
            "type": "info",
            "specific_status_type": "Dockflow\\Docky\\Integrations\\INTTRAConMegs\\DataElements\\INTTRAContext\\INTTRAShipmentStatus",
            "specific_status_id": 49057,
            "object_type": "Docky\\Shipment\\DataElements\\SeaShipment\\SeaShipment",
            "object_id": 7820,
            "event_date": "2019-04-02T12:07:00+00:00",
            "created_at": "2019-09-09 13:16:17",
            "updated_at": "2019-09-09 13:16:17",
            "tradeflow_id": 7580,
            "shipment_condition_reading_source_id": 10,
            "transport_unit_id": 1640,
            "location_id": null,
            "level": "SeaShipment",
            "specific_status": {
              "id": 49057,
              "created_at": "2019-09-09 13:16:17",
              "updated_at": "2019-09-09 13:16:17",
              "xml_message": "",
              "raw_attribute": "xml_message",
              "raw_filetype": "xml"
            }
          },
          {
            "id": 71848,
            "message": "Ready to be loaded ",
            "phase": null,
            "type": "info",
            "specific_status_type": "Dockflow\\Docky\\Integrations\\INTTRAConMegs\\DataElements\\INTTRAContext\\INTTRAShipmentStatus",
            "specific_status_id": 49056,
            "object_type": "Docky\\Shipment\\DataElements\\SeaShipment\\SeaShipment",
            "object_id": 7820,
            "event_date": "2019-03-31T14:37:00+00:00",
            "created_at": "2019-09-09 13:16:17",
            "updated_at": "2019-09-09 13:16:17",
            "tradeflow_id": 7580,
            "shipment_condition_reading_source_id": 10,
            "transport_unit_id": 1640,
            "location_id": null,
            "level": "SeaShipment",
            "specific_status": {
              "id": 49056,
              "created_at": "2019-09-09 13:16:17",
              "updated_at": "2019-09-09 13:16:17",
              "xml_message": "",
              "raw_attribute": "xml_message",
              "raw_filetype": "xml"
            }
          },
          {
            "id": 71847,
            "message": "Empty to shipper",
            "phase": null,
            "type": "info",
            "specific_status_type": "Dockflow\\Docky\\Integrations\\INTTRAConMegs\\DataElements\\INTTRAContext\\INTTRAShipmentStatus",
            "specific_status_id": 49055,
            "object_type": "Docky\\Shipment\\DataElements\\SeaShipment\\SeaShipment",
            "object_id": 7820,
            "event_date": "2019-03-29T23:01:00+00:00",
            "created_at": "2019-09-09 13:16:17",
            "updated_at": "2019-09-09 13:16:17",
            "tradeflow_id": 7580,
            "shipment_condition_reading_source_id": 10,
            "transport_unit_id": 1640,
            "location_id": null,
            "level": "SeaShipment",
            "specific_status": {
              "id": 49055,
              "created_at": "2019-09-09 13:16:17",
              "updated_at": "2019-09-09 13:16:17",
              "xml_message": "",
              "raw_attribute": "xml_message",
              "raw_filetype": "xml"
            }
          }
        ],
        "carrier": {
          "id": 1229,
          "uuid_id": null,
          "name": "CMA-CGM",
          "name_short": null,
          "legal_form": null,
          "registered_office_address_id": null,
          "created_at": null,
          "updated_at": null
        },
        "transport_unit_sub_shipments": [

        ],
        "sea_movements": [
          {
            "id": 8773,
            "sea_shipment_id": 7820,
            "tradeflow_id": 7580,
            "vessel_id": 3,
            "shipment_sequence_number": 0,
            "uuid_id": null,
            "vessel_telo_loading_id": 22576,
            "vessel_telo_discharge_id": 22577,
            "created_at": "2019-09-09 13:16:17",
            "updated_at": "2019-09-09 13:16:17",
            "last_status_phase": null,
            "object_id": null,
            "event_date": null,
            "statuses": [

            ],
            "vessel_telo_loading": {
              "id": 22576,
              "reference": "0EHS58A1MA",
              "transport_unit_id": 1153,
              "location_id": 172,
              "tradeflow_id": 7580,
              "uuid_id": null,
              "created_at": "2019-09-09 13:16:17",
              "updated_at": "2019-09-09 13:16:17",
              "location": {
                "id": 172,
                "name": "IN Mundra",
                "type": "Port",
                "reference": "INMUN",
                "geolocation": {
                  "type": "GeometryCollection",
                  "geometries": [
                    {
                      "type": "Point",
                      "coordinates": [
                        69.7027,
                        22.83353
                      ]
                    }
                  ]
                },
                "raw_location_type": "Docky\\Shipment\\DataElements\\Port\\Port",
                "raw_location_id": 61647,
                "uuid_id": null,
                "address_line": null,
                "postal_code": null,
                "city_geoname_id": null,
                "country_id": 99,
                "created_at": null,
                "updated_at": "2019-09-09 13:16:17",
                "timezone": "Asia\/Calcutta",
                "fullAddress": "IN Mundra\r\n(unknown city)\r\nIndia",
                "point": {
                  "type": "Point",
                  "coordinates": [
                    69.7027,
                    22.83353
                  ]
                },
                "raw_location": {
                  "id": 61647,
                  "un_country": "IN",
                  "un_location": "MUN",
                  "un_name": "Mundra",
                  "uuid_id": null,
                  "coordinate": {
                    "type": "Point",
                    "coordinates": [
                      69.7027,
                      22.83353
                    ]
                  }
                },
                "country": {
                  "id": 99,
                  "name": "India",
                  "name_long": "India",
                  "postal": "IND",
                  "name_formal": "Republic of India",
                  "iso_a2": "IN",
                  "iso_a3": "IND",
                  "coordinate": {
                    "type": "Point",
                    "coordinates": [
                      79.6119761026,
                      22.8857821183
                    ]
                  },
                  "uuid_id": 103,
                  "uic_country_code": "",
                  "uic_id": "",
                  "uic_description": ""
                }
              },
              "readings": [
                {
                  "id": 45725,
                  "reference": null,
                  "tu_condition_reading_source_id": 855,
                  "tu_expected_location_id": 22576,
                  "type": "departure",
                  "accuracy_level": "",
                  "reading": "2019-03-29T23:01:00+00:00",
                  "event_date": "2019-05-06T06:17:00+00:00",
                  "uuid_id": null,
                  "created_at": "2019-09-09T13:16:17+00:00",
                  "updated_at": "2019-09-09T13:16:17+00:00",
                  "source": {
                    "id": 855,
                    "name": "Container Status Messages",
                    "device_id": null,
                    "device_type": null,
                    "uuid_id": null,
                    "created_at": null,
                    "updated_at": null,
                    "reference": "Container Status Messages",
                    "device": null
                  }
                }
              ]
            },
            "vessel_telo_discharge": {
              "id": 22577,
              "reference": " \t0EHS58A1MA",
              "transport_unit_id": 1153,
              "location_id": 1,
              "tradeflow_id": 7580,
              "uuid_id": null,
              "created_at": "2019-09-09 13:16:17",
              "updated_at": "2019-09-09 13:16:17",
              "location": {
                "id": 1,
                "name": "NL Rotterdam",
                "type": "Port",
                "reference": "NLRTM",
                "geolocation": {
                  "type": "GeometryCollection",
                  "geometries": [
                    {
                      "type": "Point",
                      "coordinates": [
                        4.4059,
                        51.90793
                      ]
                    }
                  ]
                },
                "raw_location_type": "Docky\\Shipment\\DataElements\\Port\\Port",
                "raw_location_id": 75441,
                "uuid_id": 1799,
                "address_line": null,
                "postal_code": null,
                "city_geoname_id": null,
                "country_id": 162,
                "created_at": null,
                "updated_at": "2019-09-09 13:16:18",
                "timezone": "Europe\/Amsterdam",
                "fullAddress": "NL Rotterdam\r\n(unknown city)\r\nNetherlands",
                "point": {
                  "type": "Point",
                  "coordinates": [
                    4.4059,
                    51.90793
                  ]
                },
                "raw_location": {
                  "id": 75441,
                  "un_country": "NL",
                  "un_location": "RTM",
                  "un_name": "Rotterdam",
                  "uuid_id": null,
                  "coordinate": {
                    "type": "Point",
                    "coordinates": [
                      4.4059,
                      51.90793
                    ]
                  }
                },
                "country": {
                  "id": 162,
                  "name": "Netherlands",
                  "name_long": "Netherlands",
                  "postal": "NL",
                  "name_formal": "Kingdom of the Netherlands",
                  "iso_a2": "NL",
                  "iso_a3": "NLD",
                  "coordinate": {
                    "type": "Point",
                    "coordinates": [
                      5.28144793007,
                      52.1007899002
                    ]
                  },
                  "uuid_id": 166,
                  "uic_country_code": "",
                  "uic_id": "",
                  "uic_description": ""
                }
              },
              "readings": [
                {
                  "id": 45726,
                  "reference": null,
                  "tu_condition_reading_source_id": 855,
                  "tu_expected_location_id": 22577,
                  "type": "arrival",
                  "accuracy_level": "",
                  "reading": "2019-04-23T06:17:00+00:00",
                  "event_date": "2019-05-06T06:17:00+00:00",
                  "uuid_id": null,
                  "created_at": "2019-09-09T13:16:17+00:00",
                  "updated_at": "2019-09-09T13:16:17+00:00",
                  "source": {
                    "id": 855,
                    "name": "Container Status Messages",
                    "device_id": null,
                    "device_type": null,
                    "uuid_id": null,
                    "created_at": null,
                    "updated_at": null,
                    "reference": "Container Status Messages",
                    "device": null
                  }
                }
              ]
            },
            "vessel": {
              "id": 3,
              "name": "CMA CGM MUMBAI",
              "IMO_number": "9778131",
              "MMSI_number": null,
              "marinetraffic_id": null,
              "call_sign": null,
              "type": null,
              "country_code": null,
              "dwt": null,
              "uuid_id": 1861,
              "created_at": null,
              "updated_at": null
            },
            "transport_unit_sub_shipments": [
              {
                "id": 33876,
                "transport_unit_id": 1640,
                "tradeflow_id": 7580,
                "shipment_object_type": "Docky\\Shipment\\DataElements\\SeaMovement\\SeaMovement",
                "shipment_object_id": 8773,
                "status": "active",
                "last_active": "2019-09-09 13:16:17",
                "created_at": "2019-09-09 13:16:17",
                "updated_at": "2019-09-09 13:16:17",
                "type": "SeaMovement",
                "transport_unit": {
                  "id": 1640,
                  "uuid_id": null,
                  "reference": "CXRU1365754",
                  "specific_tu_type_id": 1240,
                  "specific_tu_type_type": "Docky\\Logistics\\DataElements\\TransportUnit\\ContainerTUType",
                  "created_at": null,
                  "updated_at": null,
                  "type": "ContainerTUType"
                }
              }
            ]
          },
          {
            "id": 8774,
            "sea_shipment_id": 7820,
            "tradeflow_id": 7580,
            "vessel_id": 379,
            "shipment_sequence_number": 1,
            "uuid_id": null,
            "vessel_telo_loading_id": 22578,
            "vessel_telo_discharge_id": 22579,
            "created_at": "2019-09-09 13:16:18",
            "updated_at": "2019-09-09 13:16:18",
            "last_status_phase": null,
            "object_id": null,
            "event_date": null,
            "statuses": [

            ],
            "vessel_telo_loading": {
              "id": 22578,
              "reference": "344T9E",
              "transport_unit_id": 6239,
              "location_id": 1,
              "tradeflow_id": 7580,
              "uuid_id": null,
              "created_at": "2019-09-09 13:16:18",
              "updated_at": "2019-09-09 13:16:18",
              "location": {
                "id": 1,
                "name": "NL Rotterdam",
                "type": "Port",
                "reference": "NLRTM",
                "geolocation": {
                  "type": "GeometryCollection",
                  "geometries": [
                    {
                      "type": "Point",
                      "coordinates": [
                        4.4059,
                        51.90793
                      ]
                    }
                  ]
                },
                "raw_location_type": "Docky\\Shipment\\DataElements\\Port\\Port",
                "raw_location_id": 75441,
                "uuid_id": 1799,
                "address_line": null,
                "postal_code": null,
                "city_geoname_id": null,
                "country_id": 162,
                "created_at": null,
                "updated_at": "2019-09-09 13:16:18",
                "timezone": "Europe\/Amsterdam",
                "fullAddress": "NL Rotterdam\r\n(unknown city)\r\nNetherlands",
                "point": {
                  "type": "Point",
                  "coordinates": [
                    4.4059,
                    51.90793
                  ]
                },
                "raw_location": {
                  "id": 75441,
                  "un_country": "NL",
                  "un_location": "RTM",
                  "un_name": "Rotterdam",
                  "uuid_id": null,
                  "coordinate": {
                    "type": "Point",
                    "coordinates": [
                      4.4059,
                      51.90793
                    ]
                  }
                },
                "country": {
                  "id": 162,
                  "name": "Netherlands",
                  "name_long": "Netherlands",
                  "postal": "NL",
                  "name_formal": "Kingdom of the Netherlands",
                  "iso_a2": "NL",
                  "iso_a3": "NLD",
                  "coordinate": {
                    "type": "Point",
                    "coordinates": [
                      5.28144793007,
                      52.1007899002
                    ]
                  },
                  "uuid_id": 166,
                  "uic_country_code": "",
                  "uic_id": "",
                  "uic_description": ""
                }
              },
              "readings": [
                {
                  "id": 45727,
                  "reference": null,
                  "tu_condition_reading_source_id": 855,
                  "tu_expected_location_id": 22578,
                  "type": "departure",
                  "accuracy_level": "",
                  "reading": "2019-05-01T10:16:00+00:00",
                  "event_date": "2019-05-06T06:17:00+00:00",
                  "uuid_id": null,
                  "created_at": "2019-09-09T13:16:18+00:00",
                  "updated_at": "2019-09-09T13:16:18+00:00",
                  "source": {
                    "id": 855,
                    "name": "Container Status Messages",
                    "device_id": null,
                    "device_type": null,
                    "uuid_id": null,
                    "created_at": null,
                    "updated_at": null,
                    "reference": "Container Status Messages",
                    "device": null
                  }
                }
              ]
            },
            "vessel_telo_discharge": {
              "id": 22579,
              "reference": "344T9E",
              "transport_unit_id": 6239,
              "location_id": 173,
              "tradeflow_id": 7580,
              "uuid_id": null,
              "created_at": "2019-09-09 13:16:18",
              "updated_at": "2019-09-09 13:16:18",
              "location": {
                "id": 173,
                "name": "PL Gdansk",
                "type": "Port",
                "reference": "PLGDN",
                "geolocation": {
                  "type": "GeometryCollection",
                  "geometries": [
                    {
                      "type": "Point",
                      "coordinates": [
                        18.6709,
                        54.41053
                      ]
                    }
                  ]
                },
                "raw_location_type": "Docky\\Shipment\\DataElements\\Port\\Port",
                "raw_location_id": 79924,
                "uuid_id": null,
                "address_line": null,
                "postal_code": null,
                "city_geoname_id": null,
                "country_id": 175,
                "created_at": null,
                "updated_at": "2019-09-09 13:16:18",
                "timezone": "Europe\/Warsaw",
                "fullAddress": "PL Gdansk\r\n(unknown city)\r\nPoland",
                "point": {
                  "type": "Point",
                  "coordinates": [
                    18.6709,
                    54.41053
                  ]
                },
                "raw_location": {
                  "id": 79924,
                  "un_country": "PL",
                  "un_location": "GDN",
                  "un_name": "Gdansk",
                  "uuid_id": null,
                  "coordinate": {
                    "type": "Point",
                    "coordinates": [
                      18.6709,
                      54.41053
                    ]
                  }
                },
                "country": {
                  "id": 175,
                  "name": "Poland",
                  "name_long": "Poland",
                  "postal": "PL",
                  "name_formal": "Republic of Poland",
                  "iso_a2": "PL",
                  "iso_a3": "POL",
                  "coordinate": {
                    "type": "Point",
                    "coordinates": [
                      19.3901283493,
                      52.1275956442
                    ]
                  },
                  "uuid_id": 179,
                  "uic_country_code": "",
                  "uic_id": "",
                  "uic_description": ""
                }
              },
              "readings": [
                {
                  "id": 45728,
                  "reference": null,
                  "tu_condition_reading_source_id": 855,
                  "tu_expected_location_id": 22579,
                  "type": "arrival",
                  "accuracy_level": "",
                  "reading": "2019-05-06T03:43:00+00:00",
                  "event_date": "2019-05-06T06:17:00+00:00",
                  "uuid_id": null,
                  "created_at": "2019-09-09T13:16:18+00:00",
                  "updated_at": "2019-09-09T13:16:18+00:00",
                  "source": {
                    "id": 855,
                    "name": "Container Status Messages",
                    "device_id": null,
                    "device_type": null,
                    "uuid_id": null,
                    "created_at": null,
                    "updated_at": null,
                    "reference": "Container Status Messages",
                    "device": null
                  }
                }
              ]
            },
            "vessel": {
              "id": 379,
              "name": "PRIAMOS",
              "IMO_number": null,
              "MMSI_number": null,
              "marinetraffic_id": null,
              "call_sign": null,
              "type": null,
              "country_code": null,
              "dwt": null,
              "uuid_id": null,
              "created_at": null,
              "updated_at": null
            },
            "transport_unit_sub_shipments": [
              {
                "id": 33877,
                "transport_unit_id": 1640,
                "tradeflow_id": 7580,
                "shipment_object_type": "Docky\\Shipment\\DataElements\\SeaMovement\\SeaMovement",
                "shipment_object_id": 8774,
                "status": "active",
                "last_active": "2019-09-09 13:16:18",
                "created_at": "2019-09-09 13:16:18",
                "updated_at": "2019-09-09 13:16:18",
                "type": "SeaMovement",
                "transport_unit": {
                  "id": 1640,
                  "uuid_id": null,
                  "reference": "CXRU1365754",
                  "specific_tu_type_id": 1240,
                  "specific_tu_type_type": "Docky\\Logistics\\DataElements\\TransportUnit\\ContainerTUType",
                  "created_at": null,
                  "updated_at": null,
                  "type": "ContainerTUType"
                }
              }
            ]
          }
        ]
      }
    ]
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(data) {
    const dialogRef = this.dialog.open(StatusesComponent, {
      width: '800px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}