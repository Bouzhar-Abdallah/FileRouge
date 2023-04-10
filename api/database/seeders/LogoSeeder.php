<?php

namespace Database\Seeders;

use App\Models\Logo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LogoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $logos = [
            [
                'name' => 'Dfault',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681163320/BOTOLA_PRO_glyp4w.png',
                'description' => 'default logo',
            ],
            [
                'name' => 'OCK',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681161706/OCK_tzyvzc.png',
                'description' => 'olympic club khouribga',
            ],
            [
                'name' => 'WAC',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681161697/WYDAD_ATHLETIC_CLUB_LOGO_sv0frz.png',
                'description' => 'wydad athletic club',
            ],
            [
                'name' => 'RSB',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681161698/renaissance_sportive_berkane_RSB_LOGO_cjwr5o.png',
                'description' => '',
            ],
            [
                'name' => 'SCCM',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681161698/SCCM_yncexz.png',
                'description' => '',
            ],
            [
                'name' => 'HUSA',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681161696/Hassania_Agadir_ap9n1i.png',
                'description' => '',
            ],
            [
                'name' => 'IRT',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681161694/Ittihad_Tanger_s2vxa4.png',
                'description' => '',
            ],
            [
                'name' => 'MCO',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681161677/MCO_tipqfl.png',
                'description' => '',
            ],
            [
                'name' => 'OCS',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681161686/Olympic_Club_de_Safi_j66knl.png',
                'description' => '',
            ],
            [
                'name' => 'DHJ',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681161684/Difaa%CC%82_Hassani_El_Jadidi_t1tn9n.png',
                'description' => '',
            ],
            [
                'name' => 'JSS',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681161680/Jeunesse_Sportive_Soualem_rkvxeq.png',
                'description' => '',
            ],
            [
                'name' => 'MAS',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681161679/Maghreb_de_Fe%CC%80s_MAS_dar18w.png',
                'description' => '',
            ],
            [
                'name' => 'MAT',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681161678/MAT_xfkrma.png',
                'description' => '',
            ],
            [
                'name' => 'FAR',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681161668/ASFAR_iolgix.png',
                'description' => '',
            ],
            [
                'name' => 'FUS',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681161667/Fath_Union_Sport_lvllip.png',
                'description' => '',
            ],
            [
                'name' => 'KACM',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681161666/kacm_Kawkab_Athle%CC%81tique_Club_de_Marrakech_logo_ne2tvz.png',
                'description' => '',
            ],
            [
                'name' => 'RCA',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681162644/RAJA_CLUB_ATHLETIC_RCA_LOGO_m1ve9o.png',
                'description' => '',
            ],
            [
                'name' => 'CODM',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681162639/CODM_jka445.png',
                'description' => '',
            ],
            [
                'name' => 'KAC',
                'url' => 'https://res.cloudinary.com/doy8hfzvk/image/upload/v1681162639/KAC_Ke%CC%81nitra_eao6a3.png',
                'description' => '',
            ],  
        ];

        foreach ($logos as $logo) {
            Logo::create($logo);
        }
    }
}
