﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Ffffffffff
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Напитки.
    /// </summary>
    // *** Start programmer edit section *** (Напитки CustomAttributes)

    // *** End programmer edit section *** (Напитки CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("НапиткиE", new string[] {
            "Наименование as \'Наименование напитка\'",
            "Цена as \'Цена\'",
            "Составы.Наименование as \'Наименование\'",
            "Составы as \'Составы\'",
            "Ингредиенты as \'Ингредиенты\'"}, Hidden=new string[] {
            "Составы.Наименование"})]
    [MasterViewDefineAttribute("НапиткиE", "Составы", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [MasterViewDefineAttribute("НапиткиE", "Ингредиенты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Количество")]
    [View("НапиткиL", new string[] {
            "Наименование as \'Наименование напитка\'",
            "Цена as \'Цена\'"})]
    public class Напитки : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        private double fЦена;
        
        private IIS.Ffffffffff.Ингредиенты fИнгредиенты;
        
        private IIS.Ffffffffff.Составы fСоставы;
        
        // *** Start programmer edit section *** (Напитки CustomMembers)

        // *** End programmer edit section *** (Напитки CustomMembers)

        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Напитки.Наименование CustomAttributes)

        // *** End programmer edit section *** (Напитки.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Напитки.Наименование Get start)

                // *** End programmer edit section *** (Напитки.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Напитки.Наименование Get end)

                // *** End programmer edit section *** (Напитки.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Напитки.Наименование Set start)

                // *** End programmer edit section *** (Напитки.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Напитки.Наименование Set end)

                // *** End programmer edit section *** (Напитки.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Цена.
        /// </summary>
        // *** Start programmer edit section *** (Напитки.Цена CustomAttributes)

        // *** End programmer edit section *** (Напитки.Цена CustomAttributes)
        public virtual double Цена
        {
            get
            {
                // *** Start programmer edit section *** (Напитки.Цена Get start)

                // *** End programmer edit section *** (Напитки.Цена Get start)
                double result = this.fЦена;
                // *** Start programmer edit section *** (Напитки.Цена Get end)

                // *** End programmer edit section *** (Напитки.Цена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Напитки.Цена Set start)

                // *** End programmer edit section *** (Напитки.Цена Set start)
                this.fЦена = value;
                // *** Start programmer edit section *** (Напитки.Цена Set end)

                // *** End programmer edit section *** (Напитки.Цена Set end)
            }
        }
        
        /// <summary>
        /// Напитки.
        /// </summary>
        // *** Start programmer edit section *** (Напитки.Ингредиенты CustomAttributes)

        // *** End programmer edit section *** (Напитки.Ингредиенты CustomAttributes)
        [PropertyStorage(new string[] {
                "Ингредиенты"})]
        [NotNull()]
        public virtual IIS.Ffffffffff.Ингредиенты Ингредиенты
        {
            get
            {
                // *** Start programmer edit section *** (Напитки.Ингредиенты Get start)

                // *** End programmer edit section *** (Напитки.Ингредиенты Get start)
                IIS.Ffffffffff.Ингредиенты result = this.fИнгредиенты;
                // *** Start programmer edit section *** (Напитки.Ингредиенты Get end)

                // *** End programmer edit section *** (Напитки.Ингредиенты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Напитки.Ингредиенты Set start)

                // *** End programmer edit section *** (Напитки.Ингредиенты Set start)
                this.fИнгредиенты = value;
                // *** Start programmer edit section *** (Напитки.Ингредиенты Set end)

                // *** End programmer edit section *** (Напитки.Ингредиенты Set end)
            }
        }
        
        /// <summary>
        /// Напитки.
        /// </summary>
        // *** Start programmer edit section *** (Напитки.Составы CustomAttributes)

        // *** End programmer edit section *** (Напитки.Составы CustomAttributes)
        [PropertyStorage(new string[] {
                "Составы"})]
        [NotNull()]
        public virtual IIS.Ffffffffff.Составы Составы
        {
            get
            {
                // *** Start programmer edit section *** (Напитки.Составы Get start)

                // *** End programmer edit section *** (Напитки.Составы Get start)
                IIS.Ffffffffff.Составы result = this.fСоставы;
                // *** Start programmer edit section *** (Напитки.Составы Get end)

                // *** End programmer edit section *** (Напитки.Составы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Напитки.Составы Set start)

                // *** End programmer edit section *** (Напитки.Составы Set start)
                this.fСоставы = value;
                // *** Start programmer edit section *** (Напитки.Составы Set end)

                // *** End programmer edit section *** (Напитки.Составы Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "НапиткиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НапиткиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НапиткиE", typeof(IIS.Ffffffffff.Напитки));
                }
            }
            
            /// <summary>
            /// "НапиткиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НапиткиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НапиткиL", typeof(IIS.Ffffffffff.Напитки));
                }
            }
        }
    }
}
