import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [
        {
          "name": "Afghanistan",
          "iso2": "AF"
        },
        {
          "name": "Albania",
          "iso2": "AL"
        },
        {
          "name": "Algeria",
          "iso2": "DZ"
        },
        {
          "name": "American Samoa",
          "iso2": "AS"
        },
        {
          "name": "Andorra",
          "iso2": "AD"
        },
        {
          "name": "Angola",
          "iso2": "AO"
        },
        {
          "name": "Anguilla",
          "iso2": "AI"
        },
        {
          "name": "Antarctica",
          "iso2": "AQ"
        },
        {
          "name": "Antigua And Barbuda",
          "iso2": "AG"
        },
        {
          "name": "Argentina",
          "iso2": "AR"
        },
        {
          "name": "Armenia",
          "iso2": "AM"
        },
        {
          "name": "Aruba",
          "iso2": "AW"
        },
        {
          "name": "Australia",
          "iso2": "AU"
        },
        {
          "name": "Austria",
          "iso2": "AT"
        },
        {
          "name": "Azerbaijan",
          "iso2": "AZ"
        },
        {
          "name": "Bahamas",
          "iso2": "BS"
        },
        {
          "name": "Bahrain",
          "iso2": "BH"
        },
        {
          "name": "Bangladesh",
          "iso2": "BD"
        },
        {
          "name": "Barbados",
          "iso2": "BB"
        },
        {
          "name": "Belarus",
          "iso2": "BY"
        },
        {
          "name": "Belgium",
          "iso2": "BE"
        },
        {
          "name": "Belize",
          "iso2": "BZ"
        },
        {
          "name": "Benin",
          "iso2": "BJ"
        },
        {
          "name": "Bermuda",
          "iso2": "BM"
        },
        {
          "name": "Bhutan",
          "iso2": "BT"
        },
        {
          "name": "Bolivia, Plurinational State Of",
          "iso2": "BO"
        },
        {
          "name": "Bonaire, Saint Eustatius And Saba",
          "iso2": "BQ"
        },
        {
          "name": "Bosnia & Herzegovina",
          "iso2": "BA"
        },
        {
          "name": "Botswana",
          "iso2": "BW"
        },
        {
          "name": "Bouvet Island",
          "iso2": "BV"
        },
        {
          "name": "Brazil",
          "iso2": "BR"
        },
        {
          "name": "British Indian Ocean Territory",
          "iso2": "IO"
        },
        {
          "name": "Brunei Darussalam",
          "iso2": "BN"
        },
        {
          "name": "Bulgaria",
          "iso2": "BG"
        },
        {
          "name": "Burkina Faso",
          "iso2": "BF"
        },
        {
          "name": "Burundi",
          "iso2": "BI"
        },
        {
          "name": "Cambodia",
          "iso2": "KH"
        },
        {
          "name": "Cameroon",
          "iso2": "CM"
        },
        {
          "name": "Canada",
          "iso2": "CA"
        },
        {
          "name": "Cape Verde",
          "iso2": "CV"
        },
        {
          "name": "Cayman Islands",
          "iso2": "KY"
        },
        {
          "name": "Central African Republic",
          "iso2": "CF"
        },
        {
          "name": "Chad",
          "iso2": "TD"
        },
        {
          "name": "Chile",
          "iso2": "CL"
        },
        {
          "name": "China",
          "iso2": "CN"
        },
        {
          "name": "Christmas Island",
          "iso2": "CX"
        },
        {
          "name": "Cocos (Keeling) Islands",
          "iso2": "CC"
        },
        {
          "name": "Colombia",
          "iso2": "CO"
        },
        {
          "name": "Comoros",
          "iso2": "KM"
        },
        {
          "name": "Cook Islands",
          "iso2": "CK"
        },
        {
          "name": "Costa Rica",
          "iso2": "CR"
        },
        {
          "name": "Cote d'Ivoire",
          "iso2": "CI"
        },
        {
          "name": "Croatia",
          "iso2": "HR"
        },
        {
          "name": "Cuba",
          "iso2": "CU"
        },
        {
          "name": "Curacao",
          "iso2": "CW"
        },
        {
          "name": "Cyprus",
          "iso2": "CY"
        },
        {
          "name": "Czech Republic",
          "iso2": "CZ"
        },
        {
          "name": "Democratic Republic Of Congo",
          "iso2": "CD"
        },
        {
          "name": "Denmark",
          "iso2": "DK"
        },
        {
          "name": "Djibouti",
          "iso2": "DJ"
        },
        {
          "name": "Dominica",
          "iso2": "DM"
        },
        {
          "name": "Dominican Republic",
          "iso2": "DO"
        },
        {
          "name": "East Timor",
          "iso2": "TL"
        },
        {
          "name": "Ecuador",
          "iso2": "EC"
        },
        {
          "name": "Egypt",
          "iso2": "EG"
        },
        {
          "name": "El Salvador",
          "iso2": "SV"
        },
        {
          "name": "Equatorial Guinea",
          "iso2": "GQ"
        },
        {
          "name": "Eritrea",
          "iso2": "ER"
        },
        {
          "name": "Estonia",
          "iso2": "EE"
        },
        {
          "name": "Ethiopia",
          "iso2": "ET"
        },
        {
          "name": "Falkland Islands",
          "iso2": "FK"
        },
        {
          "name": "Faroe Islands",
          "iso2": "FO"
        },
        {
          "name": "Fiji",
          "iso2": "FJ"
        },
        {
          "name": "Finland",
          "iso2": "FI"
        },
        {
          "name": "France",
          "iso2": "FR"
        },
        {
          "name": "French Guiana",
          "iso2": "GF"
        },
        {
          "name": "French Polynesia",
          "iso2": "PF"
        },
        {
          "name": "French Southern Territories",
          "iso2": "TF"
        },
        {
          "name": "Gabon",
          "iso2": "GA"
        },
        {
          "name": "Gambia",
          "iso2": "GM"
        },
        {
          "name": "Georgia",
          "iso2": "GE"
        },
        {
          "name": "Germany",
          "iso2": "DE"
        },
        {
          "name": "Ghana",
          "iso2": "GH"
        },
        {
          "name": "Gibraltar",
          "iso2": "GI"
        },
        {
          "name": "Greece",
          "iso2": "GR"
        },
        {
          "name": "Greenland",
          "iso2": "GL"
        },
        {
          "name": "Grenada",
          "iso2": "GD"
        },
        {
          "name": "Guadeloupe",
          "iso2": "GP"
        },
        {
          "name": "Guam",
          "iso2": "GU"
        },
        {
          "name": "Guatemala",
          "iso2": "GT"
        },
        {
          "name": "Guernsey",
          "iso2": "GG"
        },
        {
          "name": "Guinea",
          "iso2": "GN"
        },
        {
          "name": "Guinea-bissau",
          "iso2": "GW"
        },
        {
          "name": "Guyana",
          "iso2": "GY"
        },
        {
          "name": "Haiti",
          "iso2": "HT"
        },
        {
          "name": "Heard Island And McDonald Islands",
          "iso2": "HM"
        },
        {
          "name": "Honduras",
          "iso2": "HN"
        },
        {
          "name": "Hong Kong",
          "iso2": "HK"
        },
        {
          "name": "Hungary",
          "iso2": "HU"
        },
        {
          "name": "Iceland",
          "iso2": "IS"
        },
        {
          "name": "India",
          "iso2": "IN"
        },
        {
          "name": "Indonesia",
          "iso2": "ID"
        },
        {
          "name": "Iran, Islamic Republic Of",
          "iso2": "IR"
        },
        {
          "name": "Iraq",
          "iso2": "IQ"
        },
        {
          "name": "Ireland",
          "iso2": "IE"
        },
        {
          "name": "Isle Of Man",
          "iso2": "IM"
        },
        {
          "name": "Israel",
          "iso2": "IL"
        },
        {
          "name": "Italy",
          "iso2": "IT"
        },
        {
          "name": "Jamaica",
          "iso2": "JM"
        },
        {
          "name": "Japan",
          "iso2": "JP"
        },
        {
          "name": "Jordan",
          "iso2": "JO"
        },
        {
          "name": "Kazakhstan",
          "iso2": "KZ"
        },
        {
          "name": "Kenya",
          "iso2": "KE"
        },
        {
          "name": "Kiribati",
          "iso2": "KI"
        },
        {
          "name": "Korea, Democratic People's Republic Of",
          "iso2": "KP"
        },
        {
          "name": "Korea, Republic Of",
          "iso2": "KR"
        },
        {
          "name": "Kuwait",
          "iso2": "KW"
        },
        {
          "name": "Kyrgyzstan",
          "iso2": "KG"
        },
        {
          "name": "Lao People's Democratic Republic",
          "iso2": "LA"
        },
        {
          "name": "Latvia",
          "iso2": "LV"
        },
        {
          "name": "Lebanon",
          "iso2": "LB"
        },
        {
          "name": "Lesotho",
          "iso2": "LS"
        },
        {
          "name": "Liberia",
          "iso2": "LR"
        },
        {
          "name": "Libya",
          "iso2": "LY"
        },
        {
          "name": "Liechtenstein",
          "iso2": "LI"
        },
        {
          "name": "Lithuania",
          "iso2": "LT"
        },
        {
          "name": "Luxembourg",
          "iso2": "LU"
        },
        {
          "name": "Macao",
          "iso2": "MO"
        },
        {
          "name": "Macedonia, The Former Yugoslav Republic Of",
          "iso2": "MK"
        },
        {
          "name": "Madagascar",
          "iso2": "MG"
        },
        {
          "name": "Malawi",
          "iso2": "MW"
        },
        {
          "name": "Malaysia",
          "iso2": "MY"
        },
        {
          "name": "Maldives",
          "iso2": "MV"
        },
        {
          "name": "Mali",
          "iso2": "ML"
        },
        {
          "name": "Malta",
          "iso2": "MT"
        },
        {
          "name": "Martinique",
          "iso2": "MQ"
        },
        {
          "name": "Mauritania",
          "iso2": "MR"
        },
        {
          "name": "Mauritius",
          "iso2": "MU"
        },
        {
          "name": "Mayotte",
          "iso2": "YT"
        },
        {
          "name": "Mexico",
          "iso2": "MX"
        },
        {
          "name": "Moldova",
          "iso2": "MD"
        },
        {
          "name": "Monaco",
          "iso2": "MC"
        },
        {
          "name": "Mongolia",
          "iso2": "MN"
        },
        {
          "name": "Montenegro",
          "iso2": "ME"
        },
        {
          "name": "Montserrat",
          "iso2": "MS"
        },
        {
          "name": "Morocco",
          "iso2": "MA"
        },
        {
          "name": "Mozambique",
          "iso2": "MZ"
        },
        {
          "name": "Myanmar",
          "iso2": "MM"
        },
        {
          "name": "Namibia",
          "iso2": "NA"
        },
        {
          "name": "Nauru",
          "iso2": "NR"
        },
        {
          "name": "Nepal",
          "iso2": "NP"
        },
        {
          "name": "Netherlands",
          "iso2": "NL"
        },
        {
          "name": "New Caledonia",
          "iso2": "NC"
        },
        {
          "name": "New Zealand",
          "iso2": "NZ"
        },
        {
          "name": "Nicaragua",
          "iso2": "NI"
        },
        {
          "name": "Niger",
          "iso2": "NE"
        },
        {
          "name": "Nigeria",
          "iso2": "NG"
        },
        {
          "name": "Niue",
          "iso2": "NU"
        },
        {
          "name": "Norfolk Island",
          "iso2": "NF"
        },
        {
          "name": "Norway",
          "iso2": "NO"
        },
        {
          "name": "Oman",
          "iso2": "OM"
        },
        {
          "name": "Pakistan",
          "iso2": "PK"
        },
        {
          "name": "Palau",
          "iso2": "PW"
        },
        {
          "name": "Panama",
          "iso2": "PA"
        },
        {
          "name": "Papua New Guinea",
          "iso2": "PG"
        },
        {
          "name": "Paraguay",
          "iso2": "PY"
        },
        {
          "name": "Peru",
          "iso2": "PE"
        },
        {
          "name": "Philippines",
          "iso2": "PH"
        },
        {
          "name": "Pitcairn",
          "iso2": "PN"
        },
        {
          "name": "Poland",
          "iso2": "PL"
        },
        {
          "name": "Portugal",
          "iso2": "PT"
        },
        {
          "name": "Puerto Rico",
          "iso2": "PR"
        },
        {
          "name": "Qatar",
          "iso2": "QA"
        },
        {
          "name": "Republic Of Congo",
          "iso2": "CG"
        },
        {
          "name": "Reunion",
          "iso2": "RE"
        },
        {
          "name": "Romania",
          "iso2": "RO"
        },
        {
          "name": "Russian Federation",
          "iso2": "RU"
        },
        {
          "name": "Rwanda",
          "iso2": "RW"
        },
        {
          "name": "Saint Barthélemy",
          "iso2": "BL"
        },
        {
          "name": "Saint Kitts And Nevis",
          "iso2": "KN"
        },
        {
          "name": "Saint Lucia",
          "iso2": "LC"
        },
        {
          "name": "Saint Martin",
          "iso2": "MF"
        },
        {
          "name": "Saint Pierre And Miquelon",
          "iso2": "PM"
        },
        {
          "name": "Saint Vincent And The Grenadines",
          "iso2": "VC"
        },
        {
          "name": "Samoa",
          "iso2": "WS"
        },
        {
          "name": "San Marino",
          "iso2": "SM"
        },
        {
          "name": "Sao Tome And Principe",
          "iso2": "ST"
        },
        {
          "name": "Saudi Arabia",
          "iso2": "SA"
        },
        {
          "name": "Senegal",
          "iso2": "SN"
        },
        {
          "name": "Serbia",
          "iso2": "RS"
        },
        {
          "name": "Seychelles",
          "iso2": "SC"
        },
        {
          "name": "Sierra Leone",
          "iso2": "SL"
        },
        {
          "name": "Singapore",
          "iso2": "SG"
        },
        {
          "name": "Sint Maarten",
          "iso2": "SX"
        },
        {
          "name": "Slovakia",
          "iso2": "SK"
        },
        {
          "name": "Slovenia",
          "iso2": "SI"
        },
        {
          "name": "Solomon Islands",
          "iso2": "SB"
        },
        {
          "name": "Somalia",
          "iso2": "SO"
        },
        {
          "name": "South Africa",
          "iso2": "ZA"
        },
        {
          "name": "South Georgia And The South Sandwich Islands",
          "iso2": "GS"
        },
        {
          "name": "Spain",
          "iso2": "ES"
        },
        {
          "name": "Sri Lanka",
          "iso2": "LK"
        },
        {
          "name": "Sudan",
          "iso2": "SD"
        },
        {
          "name": "Suriname",
          "iso2": "SR"
        },
        {
          "name": "Svalbard And Jan Mayen",
          "iso2": "SJ"
        },
        {
          "name": "Swaziland",
          "iso2": "SZ"
        },
        {
          "name": "Sweden",
          "iso2": "SE"
        },
        {
          "name": "Switzerland",
          "iso2": "CH"
        },
        {
          "name": "Syrian Arab Republic",
          "iso2": "SY"
        },
        {
          "name": "Taiwan, Province Of China",
          "iso2": "TW"
        },
        {
          "name": "Tajikistan",
          "iso2": "TJ"
        },
        {
          "name": "Tanzania, United Republic Of",
          "iso2": "TZ"
        },
        {
          "name": "Thailand",
          "iso2": "TH"
        },
        {
          "name": "Togo",
          "iso2": "TG"
        },
        {
          "name": "Tokelau",
          "iso2": "TK"
        },
        {
          "name": "Tonga",
          "iso2": "TO"
        },
        {
          "name": "Trinidad And Tobago",
          "iso2": "TT"
        },
        {
          "name": "Tunisia",
          "iso2": "TN"
        },
        {
          "name": "Turkey",
          "iso2": "TR"
        },
        {
          "name": "Turkmenistan",
          "iso2": "TM"
        },
        {
          "name": "Turks And Caicos Islands",
          "iso2": "TC"
        },
        {
          "name": "Uganda",
          "iso2": "UG"
        },
        {
          "name": "Ukraine",
          "iso2": "UA"
        },
        {
          "name": "United Arab Emirates",
          "iso2": "AE"
        },
        {
          "name": "United Kingdom",
          "iso2": "GB"
        },
        {
          "name": "United States",
          "iso2": "US"
        },
        {
          "name": "Uruguay",
          "iso2": "UY"
        },
        {
          "name": "Uzbekistan",
          "iso2": "UZ"
        },
        {
          "name": "Vanuatu",
          "iso2": "VU"
        },
        {
          "name": "Vatican City State",
          "iso2": "VA"
        },
        {
          "name": "Venezuela, Bolivarian Republic Of",
          "iso2": "VE"
        },
        {
          "name": "Viet Nam",
          "iso2": "VN"
        },
        {
          "name": "Virgin Islands (British)",
          "iso2": "VG"
        },
        {
          "name": "Virgin Islands (US)",
          "iso2": "VI"
        },
        {
          "name": "Wallis And Futuna",
          "iso2": "WF"
        },
        {
          "name": "Western Sahara",
          "iso2": "EH"
        },
        {
          "name": "Yemen",
          "iso2": "YE"
        },
        {
          "name": "Zambia",
          "iso2": "ZM"
        },
        {
          "name": "Zimbabwe",
          "iso2": "ZW"
        }
      ]
    };

    this.importImg = this.importImg.bind(this);
}

  importImg(e) {
    let img = {};
    e.keys().map((item, index) => { img[item.replace('./', '')] = e(item); });
    return img;
}

  render() {
    const img = this.importImg(require.context('./flags', false, /\.svg/));

    return (
      <div className="container">
      {
        this.state.countries.map((country, index) => {
          return (
            <div><img src={img[`${country.iso2.toLowerCase() + '.svg'}`]} alt={country.name} title={country.name} /></div>
          )
        })
      }
      </div>
    );
  }
}

export default App;
