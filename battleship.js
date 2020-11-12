$(document).ready(function() {
    $(":checkbox").change(placePeg);

    function placePeg() {
        var p1subSink = false;
        var p1BshipSink = false;
        var p2subSink = false;
        var p2BshipSink = false;
        // p1Sub1 will be true if checkbox is checked
        var p1Sub1 = $("#p1-sub1").is(":checked");
        var p1Sub2 = $("#p1-sub2").is(":checked");
        var p1Sub3 = $("#p1-sub3").is(":checked");

        // create variables for player 1's sub 2 and sub 3

        // Test if player 1's submarine was sunk
        // If it was, then show the message:
        // $("#p1-sub-msg").show();
        if (p1Sub1 && p1Sub2 && p1Sub3) {
            p1subSink = true;
            $("#p1-sub-msg").show();
        }


        // p1Bship1 will be true if checkbox is checked
        var p1Bship1 = $("#p1-bship1").is(":checked");
        var p1Bship2 = $("#p1-bship2").is(":checked");
        var p1Bship3 = $("#p1-bship3").is(":checked");
        var p1Bship4 = $("#p1-bship4").is(":checked");

        // create variables for player 1's battleship 2, 3, and 4

        // Test if player 1's battleship was sunk
        // If it was, then show the message:
        // $("#p1-bship-msg").show();
        if (p1Bship1 && p1Bship2 && p1Bship3 && p1Bship4) {
            p1BshipSink = true;
            $("#p1-bship-msg").show();
        }


        // p2Sub1 will be true if checkbox is checked
        var p2Sub1 = $("#p2-sub1").is(":checked");
        var p2Sub2 = $("#p2-sub2").is(":checked");
        var p2Sub3 = $("#p2-sub3").is(":checked");

        // create variables for player 2's sub 2 and sub 3

        // Test if player 2's submarine was sunk
        // If it was, then show the message:
        // $("#p2-sub-msg").show();
        if (p2Sub1 && p2Sub2 && p2Sub3) {
            p2subSink = true;
            $("#p2-sub-msg").show();
        }

        // p2Bship1 will be true if checkbox is checked
        var p2Bship1 = $("#p2-bship1").is(":checked");
        var p2Bship2 = $("#p2-bship2").is(":checked");
        var p2Bship3 = $("#p2-bship3").is(":checked");
        var p2Bship4 = $("#p2-bship4").is(":checked");

        // create variables for player 2's battleship 2, 3, and 4

        // Test if player 2's battleship was sunk
        // If it was, then show the message:
        // $("#p2-bship-msg").show();
        if (p2Bship1 && p2Bship2 && p2Bship3 && p2Bship4) {
            p2BshipSink = true;
            $("#p2-bship-msg").show();
        }

        // If both of player 1's ships were sunk
        // OR
        // both of player 2's ships were sunk
        // then:
        // $("#gameOverMsg").show();

        if ((p1subSink && p1BshipSink) || (p2subSink && p2BshipSink)) {
            $("#gameOverMsg").show();
        }



    }

});