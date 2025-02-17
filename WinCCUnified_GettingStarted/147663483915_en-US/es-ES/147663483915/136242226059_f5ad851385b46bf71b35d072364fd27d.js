﻿topicarray["f5ad851385b46bf71b35d072364fd27d"] = {"Html":"\u003c?xml version=\"1.0\" encoding=\"utf-16\"?\u003e\u003chtml xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\"\u003e\u003cdiv class=\"main_body\"\u003e\u003cbr /\u003e\u003cdiv class=\"content_body\"\u003e\u003cdiv class=\"body_headline\" style=\"display:none;\"\u003eAdministración de usuarios en WinCC\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"quintessence\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003ePrincipios básicos\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​WinCC permite restringir acciones de manejo relevantes para la seguridad a determinados usuarios y proteger de este modo datos y funciones en Runtime contra accesos no autorizados.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Puede crear usuarios y asignarles permisos. En los objetos relevantes para la seguridad puede configurar los permisos necesarios para el manejo.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Los usuarios deben acreditarse en Runtime introduciendo el nombre de usuario y la contraseña. La acción se ejecutará si el usuario posee el permiso necesario.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Cuando se asigna un rol a un usuario, este obtiene los derechos asociados a dicho rol. En un proceso de elaboración de cerveza, los roles y los derechos correspondientes podrían ser los siguientes:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"tableTitleWide inserted-object tablecontainer has-no-table-title has-no-table-footer\"\u003e\u003cdiv class=\"table-overflow-container\"\u003e\u003ctable cellspacing=\"0\" class=\"table_default\" width=\"100%\"\u003e\u003ccolgroup\u003e\u003ccol width=\"25.0%\" /\u003e\u003ccol width=\"25.0%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"25.0%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"25.0%\" class=\"column-two-and-beyond\" /\u003e\u003c/colgroup\u003e\u003ctr class=\"first\"\u003e\u003cth class=\"default_Cell empty\"\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Maestro cervecero\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Jefe de turno\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Operador\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr class=\"first-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Autorizado a observar el proceso\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​x\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​x\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​x\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Autorizado a manejar el proceso\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​x\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​x\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell empty\"\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Autorizado a editar recetas\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​x\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell empty\"\u003e\u003c/td\u003e\u003ctd class=\"default_Cell empty\"\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​La administración de usuarios se realiza a nivel global o local.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eAdministración de usuarios global y local\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​La administración de usuarios local se efectúa dentro del proyecto. Los usuarios son creados por el ingeniero y solo existen para este proyecto. El ingeniero define los derechos de los distintos roles y asigna los roles a los usuarios.\u003c/span\u003e\u003c/div\u003e\u003cspan class=\"img_free inserted-object has-no-image-title has-no-image-legend\"\u003e\u003cdiv class=\"box-before-thumbnail-box\"\u003e​\u003c/div\u003e\u003cimg src=\"images/141562768395_DV_resource.Stream@PNG-es-ES.png\" docVersionId=\"147663483915\" language=\"es-ES\" class=\"img_free\" data-type=\"fall3\" data-img-type=\"Painting\" data-original-height=\"253\" data-original-width=\"324\" data-resolution-x=\"96\" data-resolution-y=\"96\" id=\"147663483915_f5ad851385b46bf71b35d072364fd27d_141562768395_DV_resource_ID0ALC0NC\" width=\"324\" highresolutionsrc=\"images/141562768395_DV_resource.Stream@EPS_RGB-es-ES.png\" /\u003e\u003c/span\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Para agregar o eliminar un usuario posteriormente, hay que cambiar el proyecto. La administración de usuarios local es idónea para los casos en que se crea y administra un solo proyecto. Por ejemplo, cuando se gestiona una sola fábrica de cerveza.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​En la administración de usuarios global, los usuarios están desvinculados de su rol en el proyecto. Los usuarios se administran de modo centralizado en un servidor externo. Los usuarios se crean en el servidor externo y se organizan en grupos en función de su misión posterior. El ingeniero no crea usuarios en el proyecto. Importa los grupos del servidor externo y asigna los roles correspondientes a los grupos.\u003c/span\u003e\u003c/div\u003e\u003cspan class=\"img_free inserted-object has-no-image-title has-no-image-legend\"\u003e\u003cdiv class=\"box-before-thumbnail-box\"\u003e​\u003c/div\u003e\u003cimg src=\"images/141562709003_DV_resource.Stream@PNG-es-ES.png\" docVersionId=\"147663483915\" language=\"es-ES\" class=\"img_free\" data-type=\"fall3\" data-img-type=\"Painting\" data-original-height=\"273\" data-original-width=\"525\" data-resolution-x=\"96\" data-resolution-y=\"96\" id=\"147663483915_f5ad851385b46bf71b35d072364fd27d_141562709003_DV_resource_ID0A2C04C\" width=\"525\" highresolutionsrc=\"images/141562709003_DV_resource.Stream@EPS_RGB-es-ES.png\" /\u003e\u003c/span\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Para agregar usuarios posteriormente, hay que crearlos en el servidor externo y asignarlos a un grupo existente. De este modo, los usuarios obtienen automáticamente el rol asignado a su grupo en el proyecto en cuestión. No es necesario modificar el proyecto. \u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​La administración de usuarios global resulta idónea cuando se deben gestionar varios proyectos de modo centralizado. Por ejemplo, cuando la misma empresa administra varias fábricas de cerveza o se incorporan nuevos empleados con frecuencia.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/html\u003e"}