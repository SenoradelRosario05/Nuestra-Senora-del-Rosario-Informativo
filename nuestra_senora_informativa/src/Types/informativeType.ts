
export type AboutUsSection = {

    Id_About_Us: number,
    Subtitle_About_Us: string,
    MissionTitle_About_Us: string,
    MissionDescription_About_Us: string,
    VisionTitle_About_Us: string,
    VisionDescription_About_Us: string,
    
    }
    
    export type HeroSection = {
    
    Id_Hero: number,
    Hero_Title: string,
    Subtitle_Hero: string,
    Hero_Image_Url: string,
    HeroText_Button: string,
    
    }
    
    export type NavbarItem = {
        id_Nav_It: number;         
        title_Nav: string;         
        urlNav: string;             
        order_Item_Nav: number;     
        isActive: boolean;         
        children: NavbarItem[];     
      };
    
    
    export type SectionPatchOperation = {
    
        id: number, //id del item al cual vamos a modificar 
        patch: string, //ruta de la entidad
        section : 'HeroSection' | 'AboutUsSection' | 'RegistrationSection' | 'ServiceSection' | 'SiteSettings' | 'TittleSection' | 'NavbarItem', //seccion a la que pertenece el item
        op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test' , //operacion a realizar
        from?: string, //ruta de la entidad origen
        value: string | boolean | number //valor a modificar
    }
    
    
    export type RegistrationSection = {
    
    Id_Registration: number,
    Registration_MoreInfoPrompt: string,
    RegistrationText_Button: string,
    Registration_SupportMessage : string,
    Registration_Image_Url: string,
    
    }
    
    
    export type ServiceSection = {
    
    Id_ServiceSection: number,
    Title_Card_SV: string,
    Image_Card_SV_Url: string,
    Description_Card_SV: string,
    SVText_Button: string,
    
    }
    
    
    export type SiteSettings = {
    
    Id_SiteSettings: number,
    SiteTitle: string,
    Icon_HGA_Url: string,
    
    }
    
    export type TittleSection = {
    
    Id_TitleSection: number,
    Title_Text_Section: string,
    Description_Section: string,
    
    }
    
    
    export type ContactSection = {
    id_Contact: number,
    contact_title: string,
    contact_url: string
    }


    export type FormDonationCreateDto = {
      Dn_Name: string;
      Dn_Lastname1: string;
      Dn_Lastname2: string;
      Dn_Cedula: number;
      Dn_Phone: string;
      Dn_Email: string;
      Delivery_date: Date;
      Id_DonationType: number;
      Id_MethodDonation: number;
  };

  export type ConfirmationModalProps = {
    isOpen: boolean;
    onClose: () => void;
  }

  export type FormVolunteerCreateDto = {
    Vn_Name: string;
Vn_Lastname1 : string;
 Vn_Lastname2 : string;
Vn_Cedula : string;
 Vn_Phone: string;
Vn_Email : string;
Delivery_Date :Date;
  End_Date:Date;
  Id_VoluntarieType: number;
};



export type AplicationFormDTO = {
  id_ApplicationForm: number;
  applicationDate: string;
  guardianName: string;
  guardianLastName1: string;
  guardianLastName2: string;
  guardianCedula: string;
  guardianEmail: string;
  guardianPhone: string;
  name_AP: string;
  lastName1_AP: string;
  lastName2_AP: string;
  cedula_AP: string;
  age_AP: number;
  location_AP: string;
  status_Name: string;
};