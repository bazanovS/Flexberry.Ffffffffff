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
    /// Ингредиенты.
    /// </summary>
    // *** Start programmer edit section *** (Ингредиенты CustomAttributes)

    // *** End programmer edit section *** (Ингредиенты CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ИнгредиентыE", new string[] {
            "Составы as \'Составы\'",
            "Составы.Наименование as \'Наименование\'",
            "Количество as \'Количество\'",
            "Остаток as \'Остаток\'",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.ФИО as \'ФИО\'",
            "Сотрудники.Должность as \'Должность\'"}, Hidden=new string[] {
            "Составы.Наименование",
            "Сотрудники.ФИО"})]
    [MasterViewDefineAttribute("ИнгредиентыE", "Составы", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [MasterViewDefineAttribute("ИнгредиентыE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ИнгредиентыL", new string[] {
            "Составы.Наименование as \'Наименование\'",
            "Количество as \'Количество\'",
            "Остаток as \'Остаток\'",
            "Сотрудники.ФИО as \'ФИО\'",
            "Сотрудники.Должность as \'Должность\'"})]
    public class Ингредиенты : ICSSoft.STORMNET.DataObject
    {
        
        private int fКоличество;
        
        private double fОстаток;
        
        private IIS.Ffffffffff.Составы fСоставы;
        
        private IIS.Ffffffffff.Сотрудники fСотрудники;
        
        // *** Start programmer edit section *** (Ингредиенты CustomMembers)

        // *** End programmer edit section *** (Ингредиенты CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (Ингредиенты.Количество CustomAttributes)

        // *** End programmer edit section *** (Ингредиенты.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (Ингредиенты.Количество Get start)

                // *** End programmer edit section *** (Ингредиенты.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (Ингредиенты.Количество Get end)

                // *** End programmer edit section *** (Ингредиенты.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Ингредиенты.Количество Set start)

                // *** End programmer edit section *** (Ингредиенты.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (Ингредиенты.Количество Set end)

                // *** End programmer edit section *** (Ингредиенты.Количество Set end)
            }
        }
        
        /// <summary>
        /// Остаток.
        /// </summary>
        // *** Start programmer edit section *** (Ингредиенты.Остаток CustomAttributes)

        // *** End programmer edit section *** (Ингредиенты.Остаток CustomAttributes)
        public virtual double Остаток
        {
            get
            {
                // *** Start programmer edit section *** (Ингредиенты.Остаток Get start)

                // *** End programmer edit section *** (Ингредиенты.Остаток Get start)
                double result = this.fОстаток;
                // *** Start programmer edit section *** (Ингредиенты.Остаток Get end)

                // *** End programmer edit section *** (Ингредиенты.Остаток Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Ингредиенты.Остаток Set start)

                // *** End programmer edit section *** (Ингредиенты.Остаток Set start)
                this.fОстаток = value;
                // *** Start programmer edit section *** (Ингредиенты.Остаток Set end)

                // *** End programmer edit section *** (Ингредиенты.Остаток Set end)
            }
        }
        
        /// <summary>
        /// Ингредиенты.
        /// </summary>
        // *** Start programmer edit section *** (Ингредиенты.Составы CustomAttributes)

        // *** End programmer edit section *** (Ингредиенты.Составы CustomAttributes)
        [PropertyStorage(new string[] {
                "Составы"})]
        [NotNull()]
        public virtual IIS.Ffffffffff.Составы Составы
        {
            get
            {
                // *** Start programmer edit section *** (Ингредиенты.Составы Get start)

                // *** End programmer edit section *** (Ингредиенты.Составы Get start)
                IIS.Ffffffffff.Составы result = this.fСоставы;
                // *** Start programmer edit section *** (Ингредиенты.Составы Get end)

                // *** End programmer edit section *** (Ингредиенты.Составы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Ингредиенты.Составы Set start)

                // *** End programmer edit section *** (Ингредиенты.Составы Set start)
                this.fСоставы = value;
                // *** Start programmer edit section *** (Ингредиенты.Составы Set end)

                // *** End programmer edit section *** (Ингредиенты.Составы Set end)
            }
        }
        
        /// <summary>
        /// Ингредиенты.
        /// </summary>
        // *** Start programmer edit section *** (Ингредиенты.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (Ингредиенты.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.Ffffffffff.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (Ингредиенты.Сотрудники Get start)

                // *** End programmer edit section *** (Ингредиенты.Сотрудники Get start)
                IIS.Ffffffffff.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (Ингредиенты.Сотрудники Get end)

                // *** End programmer edit section *** (Ингредиенты.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Ингредиенты.Сотрудники Set start)

                // *** End programmer edit section *** (Ингредиенты.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (Ингредиенты.Сотрудники Set end)

                // *** End programmer edit section *** (Ингредиенты.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ИнгредиентыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ИнгредиентыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ИнгредиентыE", typeof(IIS.Ffffffffff.Ингредиенты));
                }
            }
            
            /// <summary>
            /// "ИнгредиентыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ИнгредиентыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ИнгредиентыL", typeof(IIS.Ffffffffff.Ингредиенты));
                }
            }
        }
    }
}
