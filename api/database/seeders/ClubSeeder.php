<?php

namespace Database\Seeders;

use App\Models\Club;
use Database\Factories\ClubFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClubSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //clubs with names and icon_logo_url = '';

        $green = "#00FF00";
        $blue = "#0000FF";
        $red = "#FF0000";
        $yellow = "#FFFF00";
        $black = "#000000";
        $white = "#FFFFFF";
        $orange = "#FFA500";


        $clubs = [
            [
                'name' => 'FAR Rabat',
                'abreviation' => 'FAR',
                'icon_logo_url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1680558536/lxzYYTil-EyoH1qCf_l4qv6o.png',
                'primary_color' => $red,
                'secondary_color' => $green,
            ], [
                'name' => 'Wydad Casablanca',
                'abreviation' => 'WAC',
                'icon_logo_url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1680558535/GI8EoU9r-jwS3BZqq_p8fshg.png',
                'primary_color' => $red,
                'secondary_color' => $white,
            ], [
                'name' => 'FUS Rabat',
                'abreviation' => 'FUS',
                'icon_logo_url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1680558534/EkvitHfM-W6bUbbPE_uy1ix2.png',
                'primary_color' => $white,
                'secondary_color' => $red,
            ], [
                'name' => 'Raja Casablanca',
                'abreviation' => 'RCA',
                'icon_logo_url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1680558535/ATfrBYjl-MPQ5rYxJ_vva1yd.png',
                'primary_color' => $green,
                'secondary_color' => $white,
            ], [
                'name' => 'Olympyque Safi',
                'abreviation' => 'OCS',
                'icon_logo_url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1680558536/UJFjZFBr-63LcsWgs_rjvpxb.png',
                'primary_color' => $blue,
                'secondary_color' => $red,
            ], [
                'name' => 'Berkane',
                'abreviation' => 'RSB',
                'icon_logo_url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1680558536/UPmgHwCa-bqNV2HgA_qp3vdo.png',
                'primary_color' => $orange,
                'secondary_color' => $green,
            ], [
                'name' => 'Maghreb Fez',
                'abreviation' => 'MAS',
                'icon_logo_url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1680558536/WYYLJbyS-KrkUCdS2_e2kq5a.png',
                'primary_color' => $yellow,
                'secondary_color' => $black,
            ], [
                'name' => 'Union Touarga',
                'abreviation' => 'UTS',
                'icon_logo_url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1680558535/bkYK1GyB-prhXSujC_g1bafs.png',
                'primary_color' => $yellow,
                'secondary_color' => $green,
            ], [
                'name' => 'Jeunesse Sportive Soualem',
                'abreviation' => 'JSS',
                'icon_logo_url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1680558535/4p46iqZA-8WZfae8O_ilfyfd.png',
                'primary_color' => $blue,
                'secondary_color' => $yellow,
            ], [
                'name' => 'Chabab Mohammedia',
                'abreviation' => 'SCCM',
                'icon_logo_url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1680558535/jZUCPOzB-QgRSIkyp_srixvp.png',
                'primary_color' => $red,
                'secondary_color' => $black,
            ], [
                'name' => 'Moghreb Tetouan',
                'abreviation' => 'MAT',
                'icon_logo_url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1680558535/fTN1kBBr-bZmYBGs9_v8xmjp.png',
                'primary_color' => $red,
                'secondary_color' => $white
            ], [
                'name' => 'Difaa El Jadidi',
                'abreviation' => 'DHJ',
                'icon_logo_url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1680558535/jq7lbJjl-W6bUbbPE_tnbm2w.png',
                'primary_color' => $green,
                'secondary_color' => $white,
            ], [
                'name' => 'Mouloudia Oujda',
                'abreviation' => 'MCO',
                'icon_logo_url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1680558535/jJr8Z9zS-xpXGXQAn_kbe2r0.png',
                'primary_color' => $green,
                'secondary_color' => $white,
            ], [
                'name' => 'Hassania Agadir',
                'abreviation' => 'HUSA',
                'icon_logo_url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1680558535/hA0ehAzB-63LcsWgs_ucshay.png',
                'primary_color' => $red,
                'secondary_color' => $white,
            ], [
                'name' => 'Olympyque Khouribga',
                'abreviation' => 'OCK',
                'icon_logo_url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1680558535/bc8qdozB-j7JNl0QM_zjz4t3.png',
                'primary_color' => $green,
                'secondary_color' => $white,
            ], [
                'name' => 'Itihad Tanger',
                'abreviation' => 'IRT',
                'icon_logo_url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1680558536/lr4B35Cr-bqNV2HgA_i9avvv.png',
                'primary_color' => $blue,
                'secondary_color' => $white,
            ],
        ];
        //$clubs = ["FAR Rabat", "Wydad", "FUS Rabat", "Raja Casablanca", "Safi", "Berkane", "Maghreb Fez", "Union Touarga", "Jeunesse Sportive Soualem", "Chabab Mohammedia", "Moghreb Tetouan", "Difaa El Jadidi", "Mouloudia Oujda", "Agadir", "Khouribga", "Tanger"];
        foreach ($clubs as $club) {
            $newClub = new Club();
            $newClub->name = $club['name'];
            $newClub->abreviation = $club['abreviation'];
            $newClub->icon_logo_url = $club['icon_logo_url'];
            $newClub->primary_color = $club['primary_color'];
            $newClub->secondary_color = $club['secondary_color'];
            $newClub->save();
        };
    }
}
