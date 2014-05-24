<?php
    /**
     * 本地开发环境的ROOTPATH处理
     */
    $localSysPath = $_SERVER['DOCUMENT_ROOT'];

    if (stristr($localSysPath, 'walkman')) {
        $GLOBALS['ROOTPATH'] = $localSysPath;
    } else {
        $GLOBALS['ROOTPATH'] = $localSysPath . '/walkman';
    }

    require $GLOBALS['ROOTPATH'] . '/system/less.php';

    $less = new lessc;
?>
<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <title><%= _.slugify(name) %> - MOGU F2E</title>
    <style>
        <?php echo $less->compileFile($GLOBALS['ROOTPATH'] . '/common/style/reset.less'); ?>
        <?php echo $less->compileFile($GLOBALS['ROOTPATH'] . '/common/style/global.less'); ?>
        <?php echo $less->compileFile($GLOBALS['ROOTPATH'] . '/common/header_ushop/index.less'); ?>
        <?php echo $less->compileFile('./index.less'); ?>
        <?php echo $less->compileFile($GLOBALS['ROOTPATH'] . '/common/footer_ushop/index.less'); ?>
    </style>
    <script>
        window.MOGU = window.MOGU || {};
        window.MOGUPROFILE = { cdnHost:"http://s6.mogujie.cn",appEnv:"production",is_subsite:"0",isNewIMShow:"true",logString:"eyJTRVJWRVIiOnsiVVNFUiI6Ind3dyIsIkhPTUUiOiJcL3Zhclwvd3d3IiwiRkNHSV9ST0xFIjoiUkVTUE9OREVSIiwiU0NSSVBUX0ZJTEVOQU1FIjoiXC92YXJcL3d3d1wvaHRtbFwvd3d3Lm1vZ3VqaWUuY29tXC9wdWJsaWNcL3Nob3BpbmRleC5waHAiLCJRVUVSWV9TVFJJTkciOiJrb2hhbmFfdXJpPWRldGFpbFwvMTZtb216eSZ0cmFjZWlkPXNob3BmZWVkc18xMzYzemcxdnVqOWMiLCJSRVFVRVNUX01FVEhPRCI6IkdFVCIsIkNPTlRFTlRfVFlQRSI6IiIsIkNPTlRFTlRfTEVOR1RIIjoiIiwiU0NSSVBUX05BTUUiOiJcL3Nob3BpbmRleC5waHAiLCJSRVFVRVNUX1VSSSI6IlwvZGV0YWlsXC8xNm1vbXp5P3RyYWNlaWQ9c2hvcGZlZWRzXzEzNjN6ZzF2dWo5YyIsIkRPQ1VNRU5UX1VSSSI6Ilwvc2hvcGluZGV4LnBocCIsIkRPQ1VNRU5UX1JPT1QiOiJcL3Zhclwvd3d3XC9odG1sXC93d3cubW9ndWppZS5jb21cL3B1YmxpYyIsIlNFUlZFUl9QUk9UT0NPTCI6IkhUVFBcLzEuMSIsIkdBVEVXQVlfSU5URVJGQUNFIjoiQ0dJXC8xLjEiLCJTRVJWRVJfU09GVFdBUkUiOiJuZ2lueFwvMS4yLjgiLCJSRU1PVEVfQUREUiI6IjE5Mi4xNjguMi4xMDYiLCJSRU1PVEVfUE9SVCI6IjYwOTkzIiwiU0VSVkVSX0FERFIiOiIxOTIuMTY4LjIuMTAwIiwiU0VSVkVSX1BPUlQiOiI4MCIsIlNFUlZFUl9OQU1FIjoic2hvcC5tb2d1amllLmNvbSIsIlJFRElSRUNUX1NUQVRVUyI6IjIwMCIsIkFQUExJQ0FUSU9OX0VOViI6InByb2R1Y3Rpb24iLCJNT0dVX0VER0UiOiIiLCJIVFRQX0hPU1QiOiJzaG9wLm1vZ3VqaWUuY29tIiwiSFRUUF9YX1JFQUxfSVAiOiIxMDEuNzEuMzcuMTE3IiwiSFRUUF9YX0ZPUldBUkRFRF9GT1IiOiIxMDEuNzEuMzcuMTE3IiwiSFRUUF9DQUNIRV9DT05UUk9MIjoibWF4LWFnZT0wIiwiSFRUUF9BQ0NFUFQiOiJ0ZXh0XC9odG1sLGFwcGxpY2F0aW9uXC94aHRtbCt4bWwsYXBwbGljYXRpb25cL3htbDtxPTAuOSxpbWFnZVwvd2VicCwqXC8qO3E9MC44IiwiSFRUUF9VU0VSX0FHRU5UIjoiTW96aWxsYVwvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzlfMikgQXBwbGVXZWJLaXRcLzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZVwvMzUuMC4xOTE2LjExNCBTYWZhcmlcLzUzNy4zNiIsIkhUVFBfQUNDRVBUX0VOQ09ESU5HIjoiZ3ppcCxkZWZsYXRlLHNkY2giLCJIVFRQX0FDQ0VQVF9MQU5HVUFHRSI6InpoLUNOLHpoO3E9MC44LGVuO3E9MC42LGphO3E9MC40LGtvO3E9MC4yLHpoLVRXO3E9MC4yIiwiSFRUUF9DT09LSUUiOiJIbV9sdnRfMzYyMWFjYTZkMmUyZGE2OThkYWYwMmFiYTgwOTY0YTk9MTM5OTIwNDQwNiwxMzk5MjA0NzE5OyBfX3VkX3RpcD1jbG9zZWQ7IF9fY3BzX3VuaW9uPTc2MDMyMDk4LTsgX19jcHM9My0xMmlqOWowLWhhby0xMzk5OTAyNTk3LTY7IF9fY3BzdWlkPTEyaWo5ajA7IF9fZGFvPWU0NGIxMWYyMjQzNTEwMDk1Nzc4ZDFkZGE2ZWE4YTEzXzExdG5lOWc7IF9fdWRfPTExdG5lOWc7IGxvY2FsPTE7IGZyb21fc2l0ZT13YWxrbWFuLmNvbSU1RTsgcmVfaXRfaWQ9RjRCdFpsSFlUVjsgX19tb2d1amllPTNZR0d4TGFabnZ5cnRrd2ElMkZXNmtjcXpwZERIdFowaVhGcHdSUkNlWkMzWFNxNjFjS2xCdDlIakxqbWxkUkR4a251NE02ODElMkZpU2FKazFUNWZvZER3dyUzRCUzRDsgX191dG1hPTEuOTUwNjAzMjkzLjEzOTk1MTAwMTAuMTQwMDkwMTQ5MS4xNDAwOTA4OTIxLjYyOyBfX3V0bWI9MS4wLjEwLjE0MDA5MDg5MjE7IF9fdXRtYz0xOyBfX3V0bXo9MS4xNDAwNjQyODcwLjQ0LjcudXRtY3NyPXNob3AubW9ndWppZS5jb218dXRtY2NuPShyZWZlcnJhbCl8dXRtY21kPXJlZmVycmFsfHV0bWNjdD1cLzE0ZTN1OyBfX3V0bXY9MS58MT1mcm9tUmVmZXJlcj13YWxrbWFuLmNvbT0xXjI9ZnJvbVNpdGU9bWdqc3RhdDIwMTQ9MTsgX19tZ2p1dWlkPTRhYTc3MmI5LWU1MzUtNzEyMi00NDg3LTkyNGYyYmY2NmQ0OCIsIlBIUF9TRUxGIjoiXC9zaG9waW5kZXgucGhwIiwiUkVRVUVTVF9USU1FX0ZMT0FUIjoxNDAwOTExNTk2LjcwNjIsIlJFUVVFU1RfVElNRSI6MTQwMDkxMTU5Nn0sInRyYWNlIjp7InByZUlkIjoic2hvcGZlZWRzXzEzNjN6ZzF2dWo5YyIsImN1cnJlbnRJZCI6ImRldGFpbF8xOG9qNWJqeHY5cTgifX0=",cartStyle:"1",widescreen:"1",userid:"11tne9g",avatar:"http://s17.mogucdn.com/b7/avatar/130908/wtp3y_kqyxmmtekfbguq3wgfjeg5sckzsew_250x250.jpg",isBuyer:"false"  };
    </script>
</head>
<body>

    <% if (sizetype.indexOf('1200') >= 0) { %>
    <div class="ht1200">
    <% } else { %>
    <div class="ht960">
    <% } %>
        <?php include($GLOBALS['ROOTPATH'] . '/common/header_ushop/content.php'); ?>
    </div>

    <% if (sizetype.indexOf('1200') >= 0) { %>
    <div class="fm1200">
        <?php include(dirname(__FILE__) . '/content.php'); ?>
    </div>
    <% } %>

    <% if (sizetype.indexOf('960') >= 0) { %>
    <div class="fm960 media_screen_960">
        <?php include(dirname(__FILE__) . '/content.php'); ?>
    </div>
    <% } %>

    <% if (sizetype.indexOf('1200') >= 0) { %>
    <div class="ht1200">
    <% } else { %>
    <div class="ht960">
    <% } %>
        <?php include($GLOBALS['ROOTPATH'] . '/common/footer_ushop/content.php'); ?>
    </div>

    <?php include($GLOBALS['ROOTPATH'] . '/common/conf/require.php'); ?>
    <script>
        require(['./index']);
    </script>

</body>
</html>
